import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {
    const [ inputValue, setInputValue ] = useState( '' );

    const onInputChange = (evt) => {
        setInputValue( evt.target.value );
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        const newInputValue = inputValue.trim();
        if (newInputValue <= 1) return;

        onNewCategory(newInputValue);
        setInputValue('');
    };

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Buscar Gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
                />
            </form>
        </>
    )
}
