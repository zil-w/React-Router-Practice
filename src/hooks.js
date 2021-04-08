import React, { useState } from 'react'

//okay what do we need here, we just need to abstract away the usage of useState I think
const useField = (type) => {
    const [value, setValue] = useState('')

    const changeField = (event) => {
        setValue(event.target.value)
    }

    const reset = () => {
        setValue('')
    }

    return {
        type,
        value,
        onChange: changeField,
        reset
    }
}

export { useField }