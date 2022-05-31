import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

const HeaderOfPage = (props) => {
    const { titleText, subtitleText,logoIcon} = props
 
    return (
    <>
        <Box sx={{display:"flex" , margin:"30px"}}>
            <IconButton>
                {logoIcon}
            </IconButton>
            <Box sx={{margin:"20px"}}>
                <Typography variant='h4' sx={{}}>{titleText}</Typography>
                <Typography variant='subtitle1' sx={{}}>{subtitleText}</Typography>

            </Box>
        </Box>
    </>
  )
}

export default HeaderOfPage