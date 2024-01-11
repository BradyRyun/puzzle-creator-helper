import { useState } from "react";
import { useRecoilState } from "recoil";
import { fireWeight, healthPotionWeight, lightningWeight, shieldWeight, skullWeight, swordWeight } from "./weight-adjuster";
import { gridAtom } from "../recoil/game";

export const LevelLoader = () => {
    const [showInput, setShowInput] = useState(true);
    const [, setSkullWeight] = useRecoilState(skullWeight);
    const [, setHealthPotionWeight] = useRecoilState(healthPotionWeight);
    const [, setSwordWeight] = useRecoilState(swordWeight);
    const [, setShieldWeight] = useRecoilState(shieldWeight);
    const [, setFireWeight] = useRecoilState(fireWeight);
    const [, setLightningWeight] = useRecoilState(lightningWeight);
    const [grid, setGrid] = useRecoilState(gridAtom);
    const loadLevel = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result = reader.result as string;
                const jsonData = JSON.parse(result);

                const cells = jsonData.cells;
                const gridCopy = { ...grid };
                for (const cell of cells) {
                    gridCopy[`${cell.x}-${cell.y}`] = cell.type;
                }
                const spawnWeights = jsonData.spawnWeights;
                for (const weight of spawnWeights) {
                    if (weight.type === 'skull') setSkullWeight(weight.weight);
                    if (weight.type === 'healthPotion') setHealthPotionWeight(weight.weight);
                    if (weight.type === 'sword') setSwordWeight(weight.weight);
                    if (weight.type === 'shield') setShieldWeight(weight.weight);
                    if (weight.type === 'fire') setFireWeight(weight.weight);
                    if (weight.type === 'lightning') setLightningWeight(weight.weight);
                }
                setGrid(gridCopy);

            };
            reader.readAsText(file);
        }
    };

    return (
        <>
            <div className='btn btn-primary w-fit flex mx-auto' onClick={() => {
                setShowInput(!showInput);
            }}>Load Level</div>
            {
                showInput ? <></> : <input 
                    type="file"
                    accept=".json"
                    className="file-input max-w-xs flex mx-auto" onChange={loadLevel}/>
            }
        </>
    );
}
