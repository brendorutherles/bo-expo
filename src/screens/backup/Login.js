import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import { NavigationContainer } from "@react-navigation/native";
import TextInput from "../components/form/TextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../screens/Home";
import Button from "../components/form/Button";

const Login = ({ navigation }) => {
  const [data, setData] = useState();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: { username: "", password: "" },
    onSubmit: (values) =>
      fetch(
        "https://login-paladino.rutherles.com/users/authenticate",

        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      )
        .then(async (response) => {
          const isJson = response.headers
            .get("content-type")
            ?.includes("application/json");
          const data = isJson && (await response.json());

          if (response.ok) {
             navigation.navigate("MainTabs");
          }

          // check for error response
          if (!response.ok) {
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

  function setUser() {
    fetch(
      "https://login-paladino.rutherles.com/users/authenticate",

      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      }
    )
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        if (response.ok) {
          setData(data);
        }else{
          setData(null);
              }

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        alert(error);
        console.error("There was an error!", error);
      });
  }
  //return jsonValue != null ? JSON.parse(jsonValue) : null;

  const storeData = async (value) => {
    try {
      const jsonValue = value;
      await AsyncStorage.setItem("@storage_usuarios", jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_usuarios");
      if (jsonValue !== null) {
      }
    } catch (e) {
      alert(e);
    }
  };

  function dadosLogin(event) {
    setUser();
    storeData(data);
    getData();
    handleSubmit();
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
      <Button label="Entrar" onPress={dadosLogin} />

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
