import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';

const useStayles = makeStyles(theme=> ({


    root:{
      minWidth:0,
      margin: theme.spacing(0.5)
    },
    secondary:{
        backgroundColor: theme.palette.secondary.light,
        "& .MuiButton-label" :{
            color: theme.palette.secondary.main,
        }
    },
    primary:{
        backgroundColor: theme.palette.primary.light,
        "& .MuiButton-label" :{
            color: theme.palette.primary.main,
        }
    },

 }))

const ActionsButton = (props) => {
    const classes = useStayles();

    const {color,children,onClick} = props
  return (
    <>
     <Button  className={`${classes.root} ${classes[color]}`}
     color={color}
     onClick={onClick}
     >  
         {children}
     </Button>
    </>
  )
}

export default ActionsButton