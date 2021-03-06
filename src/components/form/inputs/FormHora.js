//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'

// create a component
const FormHora = props => {
  const { name, values, setFieldValue, ...rest } = props

  return (
    <DatePicker
      style={{ width: 200 }}
      date={values[name]}
      mode='time'
      placeholder='Selecione a hora'
      confirmBtnText='Confirmar'
      cancelBtnText='Cancelar'
      showIcon={false}
      
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0
        },
        dateInput: {
          marginLeft: 36
        }
        // ... You can check the source to find the other keys.
      }}

    
      onDateChange={date => {
        setFieldValue(name, date)
      }}
    />
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

//make this component available to the app
export default FormHora
