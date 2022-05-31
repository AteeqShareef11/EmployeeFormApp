import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React from 'react'
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import Control from './Control';
import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme=>({

  dialog:{
      padding:theme.spacing(2),
      position:"absolute",
      top:"10px"
  },
  dialogContent:{
    textAlign:"center"
  },
  dialogTitle:{
    textAlign:"center"
  },
  dialogAction:{
      "& .MuiDialogActions-root":{
        justifyContent:"center"
      }
  
  },
  titleIcon:{
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.secondary.main,
    //   '&:hover':{
    //     backgroundColor: theme.palette.secondary.light,
    //     cursor: 'default'

    //   },
      '& .MuiSvgIcon-root':{
          fontSize:'8rem',
      }
  }
}))

const MyDialog = (props) => {
    const {confirmDialog,setConfirmDialog} = props
    const classes =  useStyles();
  return (
    <> 
    <Dialog className={classes.dialog} open={confirmDialog.isOpen}>
        <DialogTitle className={classes.dialogTitle}>
        <IconButton className={classes.titleIcon}  disableFocusRipple>
        <NotListedLocationIcon color='secondary' />
        </IconButton>

        </DialogTitle>
        <DialogContent className={classes.dialogContent} >
          <Typography variant="h6" >{confirmDialog.title}</Typography>
          <Typography variant="subtitle2" >{confirmDialog.subtitle}</Typography>

        </DialogContent>
        <DialogActions className={classes.dialogAction}>
                <Control.MyButton
                    text="YES"
                    color="primary"
                    variant="contained"
                    onClick={confirmDialog.onConfirm}
                />
                    <Control.MyButton
                    text="NO"
                    color="secondary"
                    variant="contained"
                    onClick={()=> {
                      setConfirmDialog({
                        ...confirmDialog,
                        isOpen:false
                      })
                    }}
                />
        </DialogActions>
    </Dialog>

    </>
  )
}

export default MyDialog