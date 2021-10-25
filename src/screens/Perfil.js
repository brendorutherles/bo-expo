import React, {useState} from "react";
import { Text, View, Alert, TouchableOpacity , Image} from "react-native";
import { useFormik } from "formik";
import TextInput from "../components/form/TextInput";
import Button from "../components/form/Button";
import Login from "./Login";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function ({ navigation }) {

  
 

  const { handleChange, handleSubmit, values , setFieldValue } = useFormik({
    initialValues: { username:"", firstName:"", lastName:"",  password:"" },

    onSubmit: (values) =>
      fetch(
        "https://login-paladino.rutherles.com/users/register",

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


  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_usuarios')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
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
      <View style={{marginBottom:25,alignContent:'center'}}>

      <Image style={{width:140,height:130}} source={require('../../assets/paladino.png')} />

      </View>

      <Text style={{ color: "#223e4b", fontSize: 20, marginBottom: 16 }}>
        CADASTRO
      </Text>

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
      
      </View>

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          icon="credit-card"
          placeholder="Digite sua matrícula?"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange("username")}
        />
      </View>

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
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


      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
        <TextInput
          icon="home"
          placeholder="Qual a sua CIA ?"
          autoCapitalize="none"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange("lastName")}
        />
      </View>


    

      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: "100%" }}>
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
        style={{ paddingTop: 30  }}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ fontSize: 20, color: "#444444"}}>Login</Text>
      </TouchableOpacity>
    </View>
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
