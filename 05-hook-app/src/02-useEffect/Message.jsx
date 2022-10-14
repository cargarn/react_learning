import { useEffect } from "react";

export const Message = () => {

    useEffect(() => {
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            //console.log(coords);
        };

        window.addEventListener( "mouseover", onMouseMove );

        return () => {
            window.removeEventListener( "mouseover", onMouseMove );
        }
    }, []);


    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}
