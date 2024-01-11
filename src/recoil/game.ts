import { atom } from "recoil";

export type GridMap = {
    [key: string]: string;
}

export enum BlockType {
    LIGHTNING = "Lightning",
    FIRE = "Fire",
    HEALTH = "HealthPotion",
    SHIELD = "Shield",
    SWORD = "Sword",
    SKULL = "Skull"
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

export const moveCountAtom = atom<number>({
    key: "moveCountAtom",
    default: 10,
});
