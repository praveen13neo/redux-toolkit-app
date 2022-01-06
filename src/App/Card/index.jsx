import React, { useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux"
import { counterActions } from "../../store/index"

const theme = createTheme({
    palette: {
        neutral: {
            main: '#022340',
            contrastText: '#fff',
        },
    },
});


const CardWrapper = () => {

    const dispatch = useDispatch();

    const counter = useSelector(state => state?.counter)
    const toggler = useSelector(state => state?.showCounter)

    console.log(toggler)

    const increment = () => {

        dispatch(counterActions.increment());

    }

    const decrement = () => {

        dispatch(counterActions.decrement());

    }

    const incrementBy5 = (incrementbyVal) => {

        dispatch(counterActions.increase(incrementbyVal));


    }

    const toggleCounter = () => {

        dispatch(counterActions.toggle());
    }


    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Redux Counter
                    </Typography>
                    {toggler && (<Typography variant="body2">
                        Counter : {counter}
                    </Typography>)}
                </CardContent>
                <CardActions>
                    <Button variant="contained" color="neutral" size="small" onClick={increment}>Increment</Button>
                    <Button variant="contained" color="neutral" size="small" onClick={() => incrementBy5(5)}>IncrementBy5</Button>
                    <Button variant="contained" color="neutral" size="small" onClick={decrement}>Decrement</Button>
                    <Button variant="contained" color="neutral" size="small" onClick={toggleCounter}>Toggle Counter</Button>

                </CardActions>
            </Card>
        </ThemeProvider>
    )
}

export default CardWrapper;