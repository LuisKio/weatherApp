import React, {useState } from 'react'

export const useInput = () => {
    const [inputState, setInputState] = useState('');
    const [disable, setDisable] = useState(false)

    const onInputChange = ({ target }) => {
        setInputState(target.value)

        if (inputState.length > 4) {
            setDisable(true);
        } else {
            setDisable(false);
        }
    }

    return {
        inputState,
        disable,
        onInputChange
    }
}

