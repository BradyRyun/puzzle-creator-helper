import { useRecoilState, useRecoilValue } from "recoil";
import { downloadFile } from "../services/json-downloader";
import { WeightMap } from "../services/weight-processor";
import { skullWeight, healthPotionWeight, shieldWeight, swordWeight, fireWeight, lightningWeight } from "./weight-adjuster";
import { widthAtom, heightAtom, gridAtom, levelNumberAtom } from "../recoil/grid";
import { AlertContext } from "../context/alert-provider";
import { useContext } from "react";

export const ExportButton = () => {
    const { setAlert } = useContext(AlertContext);
    const width = useRecoilValue(widthAtom);
    const height = useRecoilValue(heightAtom);
    const _skullWeight = useRecoilValue(skullWeight);
    const _healthPotionWeight = useRecoilValue(healthPotionWeight);
    const _shieldWeight = useRecoilValue(shieldWeight);
    const _swordWeight = useRecoilValue(swordWeight);
    const _fireWeight = useRecoilValue(fireWeight);
    const _lightningWeight = useRecoilValue(lightningWeight);
    const grid = useRecoilValue(gridAtom);
    const levelNumber = useRecoilValue(levelNumberAtom);

    const exportLevel = () => {
        let cells = [];
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                const value = grid[`${j}-${i}`] ?? "";
                if (value === "" || value === null || value === undefined) {
                    setAlert({
                        message: 'Please fill out all tiles.',
                        type: 'error',
                    });
                    return;
                }
                cells.push({
                    "x": j,
                    "y": i,
                    "type": value,
                })
            }
        }
        // for each weight, add them up, and if it's not 1.0, setAlert to an error.
        const weights = getWeights();

        if (!validateWeights()) return;
        const level = {
            "cells": cells,
            "spawnWeights": weights, 
        }
        downloadFile(level, levelNumber);
    }

    const validateWeights = () => {
        let sum = 0;
        sum = _skullWeight + _healthPotionWeight + _swordWeight + _shieldWeight + _fireWeight + _lightningWeight;
        if (sum.toFixed(1) !== "1.0") {
            setAlert({
                message: 'Weights must sum to 1.0. Current = ' + sum.toFixed(1),
                type: 'error',
            });
            return false;
        }
        return true;
    }

    
    const getWeights = () => {
        const weights: WeightMap[] = []; // Add index signature
        // Push each weight atom with key and value into the array
        weights.push({
            type: skullWeight.key,
            weight: _skullWeight,
        });
        weights.push({
            type: healthPotionWeight.key,
            weight: _healthPotionWeight,
        });
        weights.push({
            type: swordWeight.key,
            weight: _swordWeight,
        });
        weights.push({
            type: shieldWeight.key,
            weight: _shieldWeight,
        });
        weights.push({
            type: fireWeight.key,
            weight: _fireWeight,
        });
        weights.push({
            type: lightningWeight.key,
            weight: _lightningWeight,
        });
        
        return weights;
    }
    return (
        <button className="btn btn-success w-1/2 mx-auto" onClick={exportLevel}>Export</button> 
    )
}