import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {

    const { counter, increment } = useCounter();

    return (
        <>
            <h1>Counter: <Small value={ counter }></Small></h1>
            <hr/>

            <button
                className="btn bt-primary"
                onClick={ () => increment(1) }
            >
                +1
            </button>
        </>
    )
}
