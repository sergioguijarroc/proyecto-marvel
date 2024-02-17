import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function InputMaterial({ placeholder, value, onChange, onSumbit }) {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Buscador" variant="outlined" placeholder={placeholder} value={value} onChange={onChange} onSubmit={onSumbit} />
        </Box>
    );
}

export { InputMaterial };
