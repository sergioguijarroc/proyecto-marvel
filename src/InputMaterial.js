import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputMaterial({ placeholder, value, onChange, pulsarEnter }) {
    const eventoSubmit = (event) => { //Este evento se activa si el usuario presiona enter, entonces anula el evento por defecto (submit) y llama a la función onSumbit
        if (event.key === 'Enter') {
            event.preventDefault()
            pulsarEnter();
        }


    }
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Buscador" variant="outlined" placeholder={placeholder} value={value} onChange={onChange} onKeyDown={eventoSubmit} />
        </Box>
    );
}

export { InputMaterial };
