import { useContext } from "react"
import { UserContext } from "./context/UserContex";

export const HomePage = () => {

    const { user, setUser } = useContext( UserContext );
    return (
        <>
            <h1>HomePage -> { user?.name }</h1>
            <hr />
            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={() => { setUser({name: "Carlos"}) }}
            >
                Set User
            </button>
        </>
    )
}
