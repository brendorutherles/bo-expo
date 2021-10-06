import React, { useState } from "react";
import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import TextInput from "../components/form/TextInput";
import Button from "../components/form/Button";
import Login from "../screens/Login";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Keyboard, KeyboardAvoidingView } from "react-native";
import * as yup from "yup";
import DropDownPicker from "react-native-dropdown-picker";

export default function ({ navigation }) {
  const {
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    handleBlur,
    errors,
  } = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      password: "",
    },

    onSubmit: (values) =>
    

      fetch(
        "https://loginbo.herokuapp.com/users/register",

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
            
            Alert.alert(
              "Paladino",
              "Policial registrado",
              [
                {
                  text: "Login",
                  onPress: () => navigation.navigate("Login"),
                },
              ],
              { cancelable: true }
            );
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



  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  
  const [items, setItems] = useState([
    { label: "1CIE", value: "1CIE" },
    { label: "2CIE", value: "2CIE" },
    { label: "3CIE", value: "3CIE" },
    { label: "4CIE", value: "4CIE" },

  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            paddingTop: 32,
            marginBottom: 15,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 125, height: 125, paddingTop: 20 }}
            source={require("../../assets/paladino.png")}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            color: "#223e4b",
            fontSize: 20,
            marginBottom: 16,
            alignItems: "center",
          }}
        >
          CADASTRO
        </Text>

        <View
          style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
        ></View>

        <View
          style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
        >
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            name="email"
            icon="credit-card"
            placeholder="Digite sua matrícula?"
            autoCapitalize="none"
            keyboardAppearance="dark"
            onBlur={handleBlur("email")}
            keyboardType="email-address"
            returnKeyType="next"
            returnKeyLabel="next"
            onChangeText={handleChange("username")}
          />
          {errors.email && (
            <Text style={{ fontSize: 10, color: "red" }}>{errors.email}</Text>
          )}
        </View>

        <View
          style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
        >
          <TextInput
            icon="user"
            placeholder="Digite seu nome de guerra"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            onChangeText={handleChange("firstName")}
          />
        </View>

      
       

    <View
          style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
        >
          <TextInput
            icon="user"
            placeholder="Nome Completo"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            onChangeText={handleChange("lastName")}
          />
        </View>

      

        <View
          style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
        >
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            maxHeight={200}
            bottomOffset = { 500 }
            listMode = "FLATLIST"
            theme="DARK"
            mode="BADGE"
            placeholder="Escolha sua CIE"
            
            onChangeValue={(value) => {
              setFieldValue("cia", value )            }}
            
            >


            </DropDownPicker>

        
            
         
        </View>







        <View
          style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}
        >
          <TextInput
            icon="key"
            placeholder="Digite uma senha"
            secureTextEntry
            autoCompleteType="password"
            autoCapitalize="none"
            keyboardAppearance="dark"
            returnKeyType="go"
            returnKeyLabel="go"
            onChangeText={handleChange("password")}
          />
        </View>

        <Button label="Registre-se" onPress={handleSubmit} />

        <TouchableOpacity
          style={{ paddingTop: 30 }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text
            style={{
              marginBottom: 30,
              textAlign: "center",
              fontSize: 20,
              color: "#444444",
            }}
          >
            Já tem conta? Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );

  const Stack = createNativeStackNavigator();

  function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Cadastro">
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  scrollView: {
    backgroundColor: "#ffff",
    marginHorizontal: 5,
  },
  text: {
    fontSize: 42,
  },

  errorText: {
    fontSize: 10,
    color: "red",
  },
});
