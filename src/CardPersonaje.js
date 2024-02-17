import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import './CardPersonaje.css';
import Typography from '@mui/material/Typography';

export default function CardPersonaje({ datosPersonaje }) {

    return (
        <div className='cardHeroe'>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    sx={{ height: 400, width: 500 }}
                    image={datosPersonaje?.thumbnail?.path + "." + datosPersonaje?.thumbnail?.extension}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        <strong>ID:</strong> {datosPersonaje?.id} {/* Esto es para que no casque si no hay datos */}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        <strong>Nombre: </strong>{datosPersonaje?.name} {/* Esto es para que no casque si no hay datos */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Descripción: </strong>{datosPersonaje?.description === "" ? "No hay descripción :(" : datosPersonaje?.description}

                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong>Comics en los que sale: </strong>{datosPersonaje?.comics?.available}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <strong> 5 comics del personaje: </strong>
                        {datosPersonaje?.comics?.items.slice(0, 5).map((comic, index) => {
                            return <li key={index}>{comic.name}</li> //El index es para que no salga un warning en la consola
                        })}
                    </Typography>
                </CardContent>
            </Card >
        </div>
    );
}