import { useRecoilState } from "recoil";
import { BlockType, GridMap, gridAtom } from "../recoil/game";
import dice from "../assets/images/dice.png";
import { skullWeight, healthPotionWeight, swordWeight, shieldWeight, fireWeight, lightningWeight } from "./weight-adjuster";

export const RandomizeButton = () => {
    const [grid, setGrid] = useRecoilState<GridMap>(gridAtom);
    const [, setSkullWeight] = useRecoilState(skullWeight);
    const [, setHealthPotionWeight] = useRecoilState(healthPotionWeight);
    const [, setSwordWeight] = useRecoilState(swordWeight);
    const [, setShieldWeight] = useRecoilState(shieldWeight);
    const [, setFireWeight] = useRecoilState(fireWeight);
    const [, setLightningWeight] = useRecoilState(lightningWeight);
    
    const randomize = () => {
        randomizeGrid();
        randomizeWeights();
    }

    const randomizeGrid = () => {
        const newGrid: GridMap = {};
        const blockTypes = [BlockType.SWORD, BlockType.SHIELD, BlockType.SKULL, BlockType.FIRE, BlockType.HEALTH, BlockType.LIGHTNING];

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 7; j++) {
                let randomValue = Math.random();
                let blockType = getRandomBlockType(blockTypes, randomValue);

                while (isThreeInARow(newGrid, i, j, blockType)) {
                    randomValue = Math.random();
                    blockType = getRandomBlockType(blockTypes, randomValue);
                }

                newGrid[`${i}-${j}`] = blockType;
            }
        }

        setGrid(newGrid);
    }

    const getRandomBlockType = (blockTypes: BlockType[], randomValue: number): BlockType => {
        if (randomValue > 0.8) {
            return blockTypes[0];
        } else if (randomValue > 0.6 && randomValue <= 0.8) {
            return blockTypes[1];
        } else if (randomValue > 0.4 && randomValue <= 0.6) {
            return blockTypes[2];
        } else if (randomValue > 0.2 && randomValue <= 0.4) {
            return blockTypes[3];
        } else if (randomValue > 0.1 && randomValue <= 0.2) {
            return blockTypes[4];
        } else {
            return blockTypes[5];
        }
    }

    const isThreeInARow = (grid: GridMap, row: number, col: number, blockType: BlockType): boolean => {
        if (col >= 2 && grid[`${row}-${col - 1}`] === blockType && grid[`${row}-${col - 2}`] === blockType) {
            return true;
        }
        if (row >= 2 && grid[`${row - 1}-${col}`] === blockType && grid[`${row - 2}-${col}`] === blockType) {
            return true;
        }
        return false;
    }

    const randomizeWeights = () => {
        let swordWeightValue = getRandomWeight();
        let shieldWeightValue = getRandomWeight();
        let skullWeightValue = getRandomWeight();
        let fireWeightValue = getRandomWeight();
        let healthPotionWeightValue = getRandomWeight();
        let lightningWeightValue = 1 - swordWeightValue - shieldWeightValue - skullWeightValue - fireWeightValue - healthPotionWeightValue;

        while (swordWeightValue > 0.33 || shieldWeightValue > 0.33 || skullWeightValue > 0.33 || fireWeightValue > 0.33 || healthPotionWeightValue > 0.33 || lightningWeightValue > 0.33 || swordWeightValue < 0 || shieldWeightValue < 0 || skullWeightValue < 0 || fireWeightValue < 0 || healthPotionWeightValue < 0 || lightningWeightValue < 0) {
            swordWeightValue = getRandomWeight();
            shieldWeightValue = getRandomWeight();
            skullWeightValue = getRandomWeight();
            fireWeightValue = getRandomWeight();
            healthPotionWeightValue = getRandomWeight();
            lightningWeightValue = 1 - swordWeightValue - shieldWeightValue - skullWeightValue - fireWeightValue - healthPotionWeightValue;
        }

        setSwordWeight(parseFloat(swordWeightValue.toFixed(2)));
        setShieldWeight(parseFloat(shieldWeightValue.toFixed(2)));
        setSkullWeight(parseFloat(skullWeightValue.toFixed(2)));
        setFireWeight(parseFloat(fireWeightValue.toFixed(2)));
        setHealthPotionWeight(parseFloat(healthPotionWeightValue.toFixed(2)));
        setLightningWeight(parseFloat(lightningWeightValue.toFixed(2)));
    }

    const getRandomWeight = () => {
        return Math.random() * 0.33;
    }

    return (
        <div className="cursor-pointer w-fit h-fit border-2 border-gray rounded-lg bg-white">
            <img src={dice} alt="Dice" className="h-12 w-12" onClick={randomize} />
        </div>
    )
}