import { useState, ChangeEvent } from 'react';

interface formData {
    kword: string
}

export const useCustomForm = ( initialForm:formData) => {
  
    const [ formState, setFormState ] = useState<formData>( initialForm );

    const onInputChange = ({ target }:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}