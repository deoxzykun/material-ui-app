import { AppBar, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import{ PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const App = () => {

  const classes = useStyles();

  return(
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm' >
            <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Understanding material-ui, just a basic implimentation into a react app
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent='center'>
                <Grid item>
                  <Button variant='contained' color='primary' >
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary' >
                    secondary Action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container className={classes.cardGrid} maxWidth='md' >
            <Grid container spacing={4}>
              {
                cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4} >
                    <Card className={classes.card}>
                      <CardMedia 
                        className={classes.cardMedia}
                        image='https://source.unsplash.com/random'
                        title='Image Title'
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant='h5'>
                          Heading
                        </Typography>
                        <Typography>
                          anything describing about the heading lorem ipsum
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size='small' color='primary'>View</Button>
                        <Button size='small' color='primary'>Edit</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))
              }              
            </Grid>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
