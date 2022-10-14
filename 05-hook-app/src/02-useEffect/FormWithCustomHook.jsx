import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {

    const { username, email, password, formState, onInputChange, onResetForm } = useForm({
        username: "",
        email: "",
        password: "",
    });

    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@example.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder=""
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            {
                ( username === "Charlie" ) ? <Message/> : null
            }
            <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>
            
        </>
    )
}
