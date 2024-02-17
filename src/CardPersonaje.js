import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './CardPersonaje.css';
import Typography from '@mui/material/Typography';

export default function CardPersonaje({ datosPersonaje }) {

    return (
        <div className='cardHeroe'>
            <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                    sx={{ height: 500 }}
                    image={datosPersonaje?.thumbnail?.path + "." + datosPersonaje?.thumbnail?.extension}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        ID: {datosPersonaje?.id} {/* Esto es para que no casque si no hay datos */}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {datosPersonaje?.name} {/* Esto es para que no casque si no hay datos */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {datosPersonaje?.description === "" ? "No hay descripción :(" : datosPersonaje?.description}

                    </Typography>
                </CardContent>
            </Card >
        </div>
    );
}