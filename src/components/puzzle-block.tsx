import { useState } from "react";
import { IconMap } from "./icon-map";
import { gridAtom } from "../recoil/game";
import { useRecoilState } from "recoil";

type PuzzleBlockProps = {
    x: number;
    y: number;
}
export const PuzzleBlock = (props: PuzzleBlockProps) => {
    const { x, y } = props;
    const id = (Math.floor(Math.random() * 90000) + 10000).toString();
    const [grid, setGrid] = useRecoilState(gridAtom);
    const [open, setOpen] = useState<boolean>(false);
    const renderListItems = () => {
        let count = 0;
        const listItems = Object.keys(IconMap).map((icon: any) => {
            count += 1;
            return (
                <li
                    className="cursor-pointer hover:opacity-80 text-left"
                    onClick={() => {
                        const g = { ...grid };
                        g[`${x}-${y}`] = icon;
                        setGrid(g);
                        setOpen(!open);
                    }}
                    key={count}
                >
                    {icon}
                </li>
            );
        });
        return listItems;
    };

    return (
        <td>
            <div className="dropdown dropdown-hover" id={id}>
                {grid[`${x}-${y}`] === "" ? <div role="button" className="m-1 btn">Icon</div> : <div role="button" className="m-1 btn">{grid[`${x}-${y}`] ?? "Icon"}</div> }
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    {renderListItems()}
                </ul>
            </div>
        </td>

    )
}