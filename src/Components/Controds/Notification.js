import React from 'react'
import { Alert, Snackbar } from '@mui/material'

const Notification = (props) => {
    
    const {notify,setNotify} = props

    const handleClose = (e , reson) =>{
        setNotify({
          ...notify,
          isOpen:false 
        })
      }
     

  return (
    <>
    <Snackbar

       open={notify.isOpen}
       autoHideDuration={3000}
       anchorOrigin={{vertical:'top' , horizontal:'right'}}
       onClose={handleClose}
    >
        
   

    <Alert
      saverity={notify.type}
      onClose={handleClose}
    >
    {notify.message}
    </Alert>

    </Snackbar>
    </>
  )
}

export default Notification