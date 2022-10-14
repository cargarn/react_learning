import { memo } from "react"

export const Small = memo(({ value }) => {
    console.log("He vuelto a dibujarme :(");

    return (
        <small>{ value }</small>
    )
})
