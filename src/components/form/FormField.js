//FormikTextInputt liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TextInput  from "../form/TextInput";
//import { TextInput } from "react-native";

import FormDatePicker from "./inputs/FormDatePicker";
import Historico from "./inputs/Historico";
import FormDuoSelect from "./inputs/FormDuoSelect";
import FormSelect from "./inputs/FormSelect";
import FormHora from "./inputs/FormHora";




// create a component
const FormField = ({ attrs, formikObj }) => {
  const { title, subtitle, placeholder, name, options, ...otherProps } = attrs;
  const { handleChange, values } = formikObj;

  console.log(values);

  const renderInputComponent = () => {
    switch (attrs.inputType) {
      case "text":
        return (
          <TextInput
            placeholder={placeholder}
            underlineColorAndroid="rgba(0,0,0,0)"
            onChangeText={handleChange(name)}
            value={values[name]}
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            {...formikObj}
          />
        );
        break;
      case "date":
        return (
          <FormDatePicker attrs={attrs} value={values[name]} {...formikObj} />
        );
        break;

  
      case "hora":
        return (<FormHora attrs={attrs} value={values[name]} {...formikObj} />);
        break;

      case "textLongo":
        return (
          <Historico
            placeholder={placeholder}
            options={options}
            onChangeText={handleChange(name)}
            value={values[name]}
            {...formikObj}
          />
        );

        break;

      case "select":
        return (
          <FormSelect
          placeholder={placeholder}
          options={options}
          attrs={attrs}
          {...formikObj}
          {...otherProps}
        />
        );
        break;
      case "duo_select":
        return (
          <FormDuoSelect
            attrs={attrs}
            value={values[name]}
            {...formikObj}
            {...otherProps}
            options={options}
          />
        );
        break;
      default:
        break;
    }
  };

  return (
    <View>
      {title && <Text style={styles.form_field_label}>{title}</Text>}
      {subtitle && <Text style={styles.form_field_subtitle}>{subtitle}</Text>}
      <View style={styles.px10}>{renderInputComponent()}</View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  px10: { paddingVertical: 10 },
  form_field_label: {
    fontSize: 13,
    fontFamily: "RobotoCondensed_400Regular",
    marginBottom: 10,
    textTransform: "uppercase",
  },
  form_field_subtitle: {
    fontSize: 11,
    color: "gray",
    fontFamily: "RobotoCondensed_400Regular",
    marginBottom: 10,
  },
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default FormField;
