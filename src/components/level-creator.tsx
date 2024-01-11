import { LevelGrid } from "./level-grid";
import { WeightAdjuster } from "./weight-adjuster";
import { useRecoilState } from "recoil";
import { LevelLoader } from "./level-loader";
import { ResetButton } from "./reset-button";
import { heightAtom, levelNumberAtom, widthAtom } from "../recoil/game";
import { ExportButton } from "./export-button";
import { RandomizeButton } from "./random-button";

export const LevelCreator = () => {
    const [levelNumber, setLevelNumber] = useRecoilState(levelNumberAtom);
    const [width, setWidth] = useRecoilState(widthAtom);
    const [height, setHeight] = useRecoilState(heightAtom);


    return (
        <>
            <div className="drawer">
                <input id="weight-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
            <div className="flex flex-col gap-y-3">
                <div className="flex flex-row mx-auto gap-x-2">
                    <label className="label">
                        Level Number:
                        <input className="input input-sm ml-2" type="number" placeholder="Width" value={levelNumber} onChange={(e) => { setLevelNumber(Number(e.target.value))}}/>
                    </label>
                </div>
                <label htmlFor="weight-drawer" className="btn btn-info drawer-button mx-auto w-fit">Adjust Block Weights</label>
                <div className="flex flex-col mx-auto gap-y-2">
                <LevelLoader />
                </div>
                <div className="mx-auto flex flex-end justify-end w-1/2 gap-x-3">
                    <p className="my-auto">
                        Randomize Board:
                    </p>
                    <RandomizeButton />
                </div>
                <div className="flex flex-row mx-auto gap-x-2">
                    <label className="label">
                        Width:
                        <input className="input input-sm ml-2" type="number" placeholder="Width" value={width} onChange={(e) => { setWidth(Number(e.target.value))}}/>
                    </label>
                    <label className="label">
                        Height:
                        <input className="input input-sm ml-2" type="number" placeholder="Height" value={height} onChange={(e) => { setHeight(Number(e.target.value))}}/>
                    </label>
                </div>
                <div className='w-fit mx-auto'>
                    <LevelGrid width={width} height={height} />
                </div>
                <ResetButton />
                <ExportButton />
            </div>     
            </div> 
            <div className="drawer-side">
                <label htmlFor="weight-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <WeightAdjuster />
            </div>
            </div>  
        </>
    )
}