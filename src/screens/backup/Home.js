import { LinearGradient } from "expo-linear-gradient";
import React ,{useState,useEffect}from "react";
import { View, Linking, TouchableOpacity,Button } from "react-native";

import {
  Layout,
  Text,
  Section,
  SectionImage,
  SectionContent,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';





export default function ({ navigation }) {
  const [dadosUser, setDadosUser] = useState()

function getData(params) {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_login')
      if (jsonValue !== null) {
       setDadosUser(jsonValue)
      }
      //return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  
}

  useEffect(getData)


  


  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
          marginHorizontal: 20,
          flexDirection: "column",
        }}
      >
        <Section style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={() => {
              alert("Disponível em breve");
            }}
          >
            <SectionImage
              height={260}
              source={require("../../assets/img/paladino.jpg")}
            />
          </TouchableOpacity>
          <SectionContent>
            <Text>Sistema de Registro Policial{dadosUser}</Text>
          </SectionContent>
        </Section>

        <Section style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("NewBO");
            }}
            style={{
              backgroundColor: "rgb(34, 34, 34)",
              paddingHorizontal: 40,
              paddingVertical: 20,
            }}
          >
            <View
              // Background Linear Gradient  #232526, #414345
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Ionicons
                name="newspaper-outline"
                size={60}
                color="white"
                style={{ marginBottom: 20 }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  textTransform: "capitalize",
                  color: "white",
                  fontFamily: "RobotoCondensed_700Bold_Italic",
                  fontStyle: "italic",
                }}
              >
                BOLETIM DE OCORRÊNCIA
              </Text>
            </View>
          </TouchableOpacity>
        </Section>

        <Section style={{ width: "100%" }}>
          <TouchableOpacity
            onPress={() => {
              getData;
            }}
            style={{
              backgroundColor: "rgb(34, 34, 34)",
              paddingHorizontal: 40,
              paddingVertical: 20,
            }}
          >
            <View
              // Background Linear Gradient  #232526, #414345
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Ionicons
                name="md-shield-checkmark-outline"
                size={60}
                color="white"
                style={{ marginBottom: 20 }}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 22,
                  textTransform: "capitalize",
                  color: "white",
                  fontFamily: "RobotoCondensed_700Bold_Italic",
                  fontStyle: "italic",
                }}
              >
                OPERAÇÕES
              </Text>
            </View>
          </TouchableOpacity>
        </Section>
      </View>

    </Layout>
  );
}
