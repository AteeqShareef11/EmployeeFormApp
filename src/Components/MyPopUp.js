import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material';
import Control from './Controds/Control';
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(theme=>({
    dialogWrapper:{
        padding: theme.spacing(2),
        position:"absolute",
        top: theme.spacing(0)
    }

}))


const MyPopUp = (props) => {
    const classes = useStyles();
   
    const {title,children,openPopUp,setOpenPopUp} = props
  return (
    <>
    <Dialog open={openPopUp} maxWidth="md"  classes={{paper :classes.dialogWrapper}}>
             <DialogTitle>
            <div style={{display:"flex"}}>
                   <Typography sx={{flexGrow:1}} variant="h6" >{title}</Typography>
                     <Control.ActionsButton color="secondary"
                     onClick={()=> {setOpenPopUp(false)}}
                       >
                        <CloseIcon />
                     </Control.ActionsButton>
            </div>
            </DialogTitle>


            <DialogContent dividers >
               {children}
            </DialogContent>
    </Dialog>
    </>
  )
}

export default MyPopUp