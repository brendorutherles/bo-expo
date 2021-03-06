import { Formik } from "formik";
import React from "react";
import { Button, View } from "react-native";
import { Layout, Text, TextInput } from "react-native-rapi-ui";
import FormWrapper from "../components/form/FormWrapper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {removeValue} from '../services/storage';
import {AuthRoutes} from '../navigation/auth.routes'
import {getData} from '../services/storage'
import App from "../../App";


export default function ({ navigation }) {
  

  
  function teste  () {
removeValue()

navigation.navigate("Login")
    

  }

  

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

              <Button title="Sair" onPress={teste}></Button>

              
            </>
          )}
        </Formik>
      </View>
    </Layout>
  );
}
