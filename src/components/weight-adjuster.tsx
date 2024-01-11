import { atom, useRecoilState } from "recoil";

export const WeightAdjuster = () => {    
    const [skull, setSkullWeight] = useRecoilState(skullWeight);
    const [healthPotion, setHealthPotionWeight] = useRecoilState(healthPotionWeight);
    const [sword, setSwordWeight] = useRecoilState(swordWeight);
    const [shield, setShieldWeight] = useRecoilState(shieldWeight);
    const [fire, setFireWeight] = useRecoilState(fireWeight);
    const [lightning, setLightningWeight] = useRecoilState(lightningWeight);

    const onChange = (name: string, value: number) => {
        switch (name) {
            case 'skullWeight':
                setSkullWeight(Number(value));
                break;
            case 'healthPotion':
                setHealthPotionWeight(Number(value));
                break;
            case 'swordWeight':
                setSwordWeight(Number(value));
                break;
            case 'shieldWeight':
                setShieldWeight(Number(value));
                break;
            case 'fireWeight':
                setFireWeight(Number(value));
                break;
            case 'lightningWeight':
                setLightningWeight(Number(value));
                break;
            default:
                break;
        }
    }



    return (
        <form className="form">
            <label className="label">
            Skull:
                <input className="input input-sm ml-2" type="number" max={1.0} min={0.0}  step={0.1} placeholder="Skull Weight" value={skull} onChange={(e) => {
                    onChange('skullWeight', Number(e.target.value));
                }} />
            </label>
            <label className="label">
            Health Potion:
                <input className="input input-sm ml-2" type="number" max={1.0} min={0.0} step={0.1} placeholder="Health Potion Weight" value={healthPotion} onChange={(e) => {
                    onChange('healthPotion', Number(e.target.value));
                }} />
            </label>
            <label className="label">
            Sword:
                <input className="input input-sm ml-2" type="number" max={1.0} min={0.0} step={0.1} placeholder="Sword Weight" value={sword} onChange={(e) => {
                    onChange('swordWeight', Number(e.target.value));
                }} />
            </label>
            <label className="label">
            Shield:
                <input className="input input-sm ml-2" type="number" max={1.0} min={0.0}  step={0.1} placeholder="Shield Weight" value={shield} onChange={(e) => {
                    onChange('shieldWeight', Number(e.target.value));
                }} />
            </label>
            <label className="label">
            Fire:
                <input className="input input-sm ml-2" type="number" max={1.0} min={0.0}  step={0.1} placeholder="Fire Weight" value={fire} onChange={(e) => {
                    onChange('fireWeight', Number(e.target.value));
                }} />
            </label>
            <label className="label">
                Lightning:
                <input className="input input-sm ml-2" type="number" max={1.0} min={0.0}  step={0.1} placeholder="Lightning Weight" value={lightning} onChange={(e) => {
                    onChange('lightningWeight', Number(e.target.value));
                }} />
            </label>
        </form>
    )

}


export const skullWeight = atom({
    key: 'Skull',
    default: 0.2,
});

export const healthPotionWeight = atom({
    key: 'HealthPotion',
    default: 0.1,
});

export const swordWeight = atom({
    key: 'Sword',
    default: 0.3,
});

export const shieldWeight = atom({
    key: 'Shield',
    default: 0.1,
});

export const fireWeight = atom({
    key: 'Fire',
    default: 0.2,
});

export const lightningWeight = atom({
    key: 'Lightning',
    default: 0.1,
});