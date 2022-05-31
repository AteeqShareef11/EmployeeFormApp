import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { KeyboardDatePicker } from '@material-ui/pickers'


const MyDatePicker = (props) => {
    const {name,value,label,onChange} = props

    const ConvertToDoEventPara = (name,value) =>({
        target:{
            name,value
        }
   })
  return (
    <>
           <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker disableToolbar variant="inline" inputVariant="outlined"
             name={name}
             label={label}
             formate="MM/dd/yyyy"
             value={value}
             onChange={date => onChange(ConvertToDoEventPara(name,date))}
            />
                
         
             </MuiPickersUtilsProvider>
    </>
  )
}

export default MyDatePicker