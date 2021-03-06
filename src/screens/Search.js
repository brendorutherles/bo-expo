import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Linking,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Layout, Text } from "react-native-rapi-ui";
import { TopNav } from "react-native-rapi-ui";
import { API_URL } from "../helpers/constants";
import { Section, SectionContent, SectionImage } from "react-native-rapi-ui";
import Loader from "../components/utils/Loader";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { Chip } from 'react-native-elements';
import { getData } from '../services/storage'

let historico = "";

export default function ({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [dadoslogin, setDadoslogin] = useState()
  const [historicos, setHistoricos] = useState()

  const [status, setStatus] = useState("Status")

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_dadosUser')
      return setDadoslogin(JSON.parse(jsonValue));
    } catch (e) {
      // error reading value
    }
  }

  const [items, setItems] = useState([]);
  useEffect(() => {

    getData()



    const unsubscribe = navigation.addListener("focus", () => {
      setLoading(true);
      fetch(API_URL + "/boletim")
        .then((res) => res.json())
        .then((res) => {
          setItems(res.result);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    });
    return unsubscribe;
  }, [navigation]);

  if (loading) return <Loader />;












  return (


    <Layout>
      <TopNav middleContent="Procurar" />
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "RobotoCondensed_400Regular",
            marginBottom: 10,
            textTransform: "uppercase",
          }}
        >
          PROCURAR
                  </Text>
        <FlatList
          data={items}
          style={{ flex: 1 }}
          keyExtractor={(el) => el._id}
          renderItem={({ item }) => (
            <>


              {dadoslogin.username == item.username ? (
                <Section style={styles.container}>
                  <SectionContent
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>

                      <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }} >
                        <Text size="h4" style={{ fontSize: 22 , textAlign:"left" }}> Mike: {item.mike} </Text>

                      </View>


                      <Text size="h4">Respons??vel: {item.firstName}</Text>

                      <Text size="h4">Matr??cula: {item.username}</Text>
                      <Text size="h4">
                        {new Date(item.createdAt).toLocaleDateString()}{" "}
                      </Text>
                      <Text size="h6">Cia: {item.lastName}</Text>

                      <View
                        style={{ flex: 1, flexDirection: "row", paddingTop: 10, paddingVertical: 1 }}
                      >
                        



                      </View>






                    </View>

                    {JSON.stringify(item.cadastro) ? <TouchableOpacity
                      style={{
                        backgroundColor: "",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignSelf: "flex-end",
                        color: "#fff",
                        top: "0%",
                      }}
                      onPress={() => {
                        Linking.openURL(`whatsapp://send?text=*SDS%20-%20PMPE%20-%20DPO%20-%20DIRESP%20-%202%C2%B0%20BIESP%20-%20BATALH%C3%83O%20MAJOR%20PM%20OPTATO%20GUEIROS*%0A%0A*PETROLINA%20-%20PE%2F%20POLICIAIS%20MILITARES%20DO%202%C2%B0%20BIESP%20CONDUZEM%20INDIV%C3%8DDUO%20%C3%80%20DP%20POR%20${encodeURI(item.tipoOcorr)}*%0A%0A${encodeURI(item.cadastro[0].historico)}%0A%0A*Resultado:*%0A%0A*BO:%20${encodeURI(item.mike)}*%0A%0A*TC%20PM%20WASHINGTON*%0A%0A*Comandante%20do%20DO%202%C2%B0%20BIEsp%20%20%202%C2%B0%20BIEsp*%0A*Tropa%20de%20Ca%C3%A7adores*`);

                      }}
                    >


                      <FontAwesome name="whatsapp" size={25} color="black" />
                    </TouchableOpacity> : null}




                    <TouchableOpacity
                      style={{
                        backgroundColor: "",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignSelf: "flex-end",
                        color: "#fff",
                        top: "0%",
                      }}
                      onPress={() => {
                        navigation.navigate("SearchItemDetailScreen", {
                          _id: item._id,
                        });
                      }}
                    >
                      <MaterialIcons
                        name="picture-as-pdf"
                        size={25}
                        color="black"
                      />
                    </TouchableOpacity>




                  </SectionContent>
                </Section>
              ) : null}
            </>
          )}
        />
      </View>
    </Layout>
  );












}
const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
  },
  flatListContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
