import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: "Carlos",
        email: "email@1112.com",
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value,
        });
    };

    useEffect( () => {
        //console.log("formState changed");
    }, [formState]);

    useEffect( () => {
        //console.log("useEffect fired");
    }, []);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@example.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            
            <Message className={( username === "Charlie" ) ? "" : "hidden"}/>
            
        </>
    )
}
