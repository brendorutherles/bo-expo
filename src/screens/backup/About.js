import { Formik } from "formik";
import React from "react";
import { Button, View } from "react-native";
import { Layout, Text, TextInput } from "react-native-rapi-ui";
import FormWrapper from "../components/form/FormWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ({ navigation }) {
  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem("@storage_usuarios");

      navigation.navigate("Login");

    } catch (e) {
      // remove error
    }

    console.log("Done.");
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_usuarios");

      if (jsonValue == null) {
        alert(jsonValue);
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          padding: 20,
        }}
      >
        <Formik
          initialValues={{}}
          onSubmit={async (values) => {
            console.log(values);
          }}
        >
          {(formikObj) => (
            <>
              <Text>Em breve mais informações</Text>
              <Text>
                Será permitido configurar e definir alguns valores por padrão
              </Text>
              <TextInput placeholder="Nome completo"></TextInput>
              <TextInput placeholder="Lotação"></TextInput>
              <TextInput placeholder="Matrícula"></TextInput>

              <Button title="apagar" onPress={removeValue}></Button>

              <Button title="get" onPress={getData}></Button>
            </>
          )}
        </Formik>
      </View>
    </Layout>
  );
}
