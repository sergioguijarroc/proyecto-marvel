import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function BotonBuscarPersonaje({ onClick }) {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" onClick={onClick}>Buscar</Button>
        </Stack>
    );
}

export default BotonBuscarPersonaje;