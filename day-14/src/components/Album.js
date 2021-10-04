import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding:50,
    display:'flex',
    flexDirection:"row"
  },
  paper: {
    height:340,
    width:270,
    backgroundColor:"#212121",
   padding:10
   
  },
  

  album :{
    color:'white',  
    fontSize:20,
    fontWeight:"bold",
    fontFamily: "sans-serif",
    textAlign:"left",
    marginLeft:24
  },
  name:{
    color:'#bdbdbd',  
    fontSize:17,
    fontFamily: "sans-serif",
     textAlign:"left",
     marginLeft:24,
     textDecoration:"underline"
  },
  image :{
     height:230,
    width:230,
    marginTop:40,
     marginRight: 'auto',
    marginLeft: 'auto',
    
  
  },
  icon :{
    color:'green',
    fontSize:70,
     marginTop:140,
     marginLeft:130
  }
  
}));


const Album = () => {
  const classes = useStyles();

  const albums = useSelector((state) => state.allAlbums.albums);
  const renderList = albums.map((album) => {
    const { id, img, movie, singer, song,title } = album;
    return (
     
      <Grid item
      xs={12}
      sm={3}
   >
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      
       <Paper className={classes.paper}>
         
         <Paper
       className={classes.image}
        style={{
          backgroundImage: `url('${img}')`,
        backgroundSize:'100% 100%',marginTop:30
        }}
      >   <IconButton >
          <PlayCircleFilledIcon className={classes.icon}/>
           </IconButton>
              </Paper>
             
                    <br/>
                  <Typography className={classes.album}>{title}</Typography>
                  <Typography className={classes.name}>{singer}</Typography>
            
              </Paper>  
             </Grid>
      </Grid>
    </Grid>
   
    );
  });
  return <> <div style={{display:"flex",flexDirection:"row"}}>
  <Grid container spacing={5}>{renderList}</Grid></div></>;
};

export default Album;