import React from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import Posts from './components/posts/posts';
import Form from './components/form/form';
import memories from '../src/images/camara.jpg';
import useStyles from './styles';

const App=()=>{
    const classes=useStyles();
    return(
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">POSTME</Typography>
                <img className={classes.image} src={memories} alt="Posts" height="50" width="50"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;