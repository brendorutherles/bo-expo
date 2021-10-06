import AsyncStorage from "@react-native-async-storage/async-storage";






export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value) 
    await AsyncStorage.setItem('@storage_dadosUser', jsonValue)
  } catch (e) {
    // saving error
  }
}





export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_dadosUser')
     return jsonValue ;
  } catch(e) {
alert(e)  }
}




export const removeValue = async () => {
  try {
    await AsyncStorage.removeItem("@storage_dadosUser");
    alert("Deslogado");
  } catch (e) {
    alert(e);
  }

  console.log("Done.");
};
