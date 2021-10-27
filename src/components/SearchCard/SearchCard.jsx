import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SearchCard({movie}) {
    const {Title, Poster, Year} = movie
    return (
        <Card sx={{display: "flex", margin: "4px 0", alignItems: "center"}}>
            <CardMedia
                component="img"
                alt={Title}
                image={Poster}
                sx={{width: 150, height: 150}}
            />
            <CardContent sx={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Typography gutterBottom variant="h5" component="span">
                    {Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Year}
                </Typography>
            </CardContent>
            <CardActions sx={{padding: 5}}>
                <Button variant={"contained"} size="small" color="success" sx={{width: 150}}>Add To Movies</Button>
            </CardActions>
        </Card>
    );
}
