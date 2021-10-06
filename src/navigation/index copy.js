import React, {useEffect,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from "@react-native-async-storage/async-storage";


import { theme } from 'react-native-rapi-ui'
import TabBarIcon from '../components/utils/TabBarIcon'
import TabBarText from '../components/utils/TabBarText'

import Home from '../screens/Home'
import About from '../screens/About'
import Search from '../screens/Search'
import NewBO from '../screens/NewBO'
import Cadastro from '../screens/Cadastro'
import Login from '../screens/Login'


import SearchItemDetail from '../screens/SearchItemDetail'
const MainStack = createStackNavigator()





const Main = () => {
const [user, setUser] = useState()



function login(params) {
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? setUser(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
  
}



useEffect(login)


if (user == null) {
  

  return (


    <MainStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MainStack.Screen name='MainTabs' component={Login} />
      <MainStack.Screen name='NewBO' component={NewBO} />
      <MainStack.Screen name='Login' component={Login} />
      <MainStack.Screen name='Cadastro' component={Cadastro} />
      <MainStack.Screen name='SearchItemDetail' component={SearchItemDetail} />



    </MainStack.Navigator>
  )


}






  return (


    <MainStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MainStack.Screen name='MainTabs' component={MainTabs} />
      <MainStack.Screen name='NewBO' component={NewBO} />
      <MainStack.Screen name='Login' component={Login} />
      <MainStack.Screen name='Cadastro' component={Cadastro} />
      <MainStack.Screen name='SearchItemDetail' component={SearchItemDetail} />



    </MainStack.Navigator>
  )


















}






const SearchStackNavigator = createStackNavigator()
const StackNavigator = () => (
  <SearchStackNavigator.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <SearchStackNavigator.Screen
      component={Search}
      name='Search'
    ></SearchStackNavigator.Screen>
    <SearchStackNavigator.Screen
      component={SearchItemDetail}
      name='SearchItemDetailScreen'
    ></SearchStackNavigator.Screen>
  </SearchStackNavigator.Navigator>
)

const Tabs = createBottomTabNavigator()
const MainTabs = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        tabStyle: { borderTopWidth: 0 },
        style: { borderTopWidth: 1, borderColor: '#c0c0c0' },
        activeTintColor: theme.primary
      }}
    >
      {/* these icons using Ionicons */}
      <Tabs.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Início',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'md-home'} />
          )
        }}
      />
      <Tabs.Screen
        name='Search'
        component={StackNavigator}
        options={{
          title: 'Busca',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'search'} />
          )
        }}
      />
      <Tabs.Screen
        name='About'
        component={Cadastro}
        options={{
          title: 'Configurações',

          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={'settings'} />
          )
        }}
      />
    </Tabs.Navigator>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}
