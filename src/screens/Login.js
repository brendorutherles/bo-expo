import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { useFormik } from "formik";
import { NavigationContainer } from "@react-navigation/native";
import TextInput from "../components/form/TextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../screens/Home";
import Button from "../components/form/Button";
import AuthContext from "../contexts/auth";
import { signIn } from "../services/auth";
import { getData } from "../services/storage";
import { storeData } from "../services/storage";
import { Routes } from "../navigation/index";


const Login = ({ navigation }) => {
 
  const [spinner, setSpinner] = useState(false)
  const [data, setdata] = useState()




  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { username: "", password: "" },


    onSubmit: (values) =>
      fetch(
        "https://login-paladino.rutherles.com/users/authenticate",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values) ,
        }
      )
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());
          setdata(data)
          

          if (response.ok) {
           storeData(data)
           //alert(typeof data)
           navigation.navigate("MainTabs")
           setSpinner(false)
          }

          // check for error response
          if (!response.ok) {
            storeData(null)

            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          } 
        })
        .catch((error) => {
          alert(error);
          console.error("There was an error!", error);
        }),
  });

  function carregar (){
    setSpinner(true)
    handleSubmit()

  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ marginBottom: 35, alignContent: "center" }}>
        <Image
          style={{ width: 140, height: 130 }}
          source={require("../../assets/paladino.png")}
        />
      </View>

      <Text
        style={{
          paddingBottom: 50,
          color: "#223e4b",
          fontSize: 20,
          marginBottom: 16,
        }}
      >
        Entrar no Paladino
      </Text>

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          icon="credit-card"
          placeholder="Digite sua Matrícula"
          returnKeyType="next"
          returnKeyLabel="PROÓXIMO"
          onChangeText={handleChange("username")}
        />
      </View>
     

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          icon="key"
          placeholder="Digite sua senha"
          secureTextEntry
          autoCompleteType="password"
          returnKeyType="go"
          returnKeyLabel="ENTRAR"
          onChangeText={handleChange("password")}
        />
      </View>
    
      <Button label="Entrar" onPress={ carregar
      }/>
       
      
       
       <View style={{paddingTop:15}}>
      <ActivityIndicator
      animating={spinner}
      size="large" />
      </View>

      <TouchableOpacity
        style={{ paddingTop: 30 }}
        onPress={() => {
          navigation.navigate("Cadastro");
        }}
      >
        <Text style={{ fontSize: 20, color: "#444444" }}>CADASTRE-SE</Text>
      </TouchableOpacity>

     

    </View>
  );
};
export default Login;





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 13
  }
});