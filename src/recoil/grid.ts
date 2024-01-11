import { atom } from "recoil";

type GridMap = {
    [key: string]: string;
}
export const widthAtom = atom<number>({
    key: "widthAtom",
    default: 6,
});

export const heightAtom = atom<number>({
    key: "heightAtom",
    default: 6,
});
// Define the Recoil atom for the grid
export const gridAtom = atom<GridMap>({
    key: "gridAtom",
    default: {},
});

export const levelNumberAtom = atom<number>({
    key: "levelNumberAtom",
    default: 1,
});