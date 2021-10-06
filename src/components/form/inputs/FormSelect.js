import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const FormSelect = (props) => {
  const {
    attrs: { name },
    values,
    setFieldValue,
    options,
  } = props;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState(options);


  return (
    <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        searchable={true}
        language="PT"
        translation={{
          SEARCH_PLACEHOLDER: "Digite aqui para pesquisar"
        }}


        setValue={setValue}
        setItems={setItems}
        maxHeight={200}
        bottomOffset={500}
        listMode="FLATLIST"
        theme="DARK"
        mode="BADGE"
        placeholder={JSON.stringify(props.placeholder)}
        onChangeValue={(value) => {
          setFieldValue(name, value);
        }}
      ></DropDownPicker>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default FormSelect;
