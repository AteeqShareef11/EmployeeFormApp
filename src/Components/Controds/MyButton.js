import { Button } from '@mui/material'
import React from 'react'

const MyButton = (props) => {

   const {text,color, variant,onClick,...other} = props
  return (
    <>
    <Button sx={{margin:"5px"}}
    color={color}
    variant={variant}
    onClick={onClick}
    {...other}
    
    >{text}
    </Button>

    </>
  )
}

export default MyButton