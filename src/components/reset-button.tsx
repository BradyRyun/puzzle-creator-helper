import { useContext } from "react";
import { AlertContext } from "../context/alert-provider";
import { useRecoilState } from "recoil";
import { gridAtom } from "../recoil/grid";

export const ResetButton = () => {
    const { setAlert } = useContext(AlertContext);
    const [, setGrid] = useRecoilState(gridAtom);
    const reset = () => {
        setGrid({});
    }
    return <div className='btn btn-error w-1/2 flex mx-auto' onClick={() => {
        reset();
        setAlert({
            message: 'Level reset',
            type: 'success',
        });
    }}>Reset</div>
}