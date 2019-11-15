import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth:900,
        margin:"auto",
    },
    flex:{
        display:"flex",
    },
    media: {
        height: 220,
        flex:3,
    },
    contents: {
        flex:4,
    },
    title: {
        flex:1,
    },
    sentence: {
        flex:2,
    },
});

export default function VideoCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea className={classes.flex}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.contents}>
                    <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.sentence}>
                        {props.sentence}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}