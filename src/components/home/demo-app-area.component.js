import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({ 
  cardRoot: {
    width: '100%',
    backgroundColor: '#3c3c52',
    height: 250,
    borderRadius: 10,
    color: 'white',
    padding: 10
  },
  root: {
      display: 'flex',
      flexWrap: 'wrap'
  },
  cardContainer: {
    width: '30%',
    margin: 15,
    textAlign: 'left'
  }
});

export default function DemoAppArea() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
          {cardsData.map(data => {
              return (
                  <div className={classes.cardContainer}>
                      <h5>Name of alert</h5>
                      <Card key={data.id} className={classes.cardRoot}>
                          <h3>{data.name}</h3>
                      </Card>
                  </div>
              );
          })}
      </div>  
    </>
  );
}


const cardsData = [
    {id: 0, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 1, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 2, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 3, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 4, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 5, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 6, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 7, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 8, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 9, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 10, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 11, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 12, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 13, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 14, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
    {id: 15, name: 'Camera1', link: 'https://www.youtube.com/watch?v=C-hgCVxKOGE'},
]