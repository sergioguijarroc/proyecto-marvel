import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

export default function BotonBorrarHistorial({ onClick }) {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={onClick}>
                Borrar
            </Button>
        </Stack>
    );
}