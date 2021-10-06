import React,{useEffect,useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { theme } from 'react-native-rapi-ui'
import TabBarIcon from '../components/utils/TabBarIcon'
import TabBarText from '../components/utils/TabBarText'

import Home from '../screens/Home'
import About from '../screens/About'
import Search from '../screens/Search'
import NewBO from '../screens/NewBO'
import Login from '../screens/Login'
import Cadastro from '../screens/Cadastro'

import SearchItemDetail from '../screens/SearchItemDetail'
const MainStack = createStackNavigator()

const Main = () => {







    return (
      <MainStack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
       <MainStack.Screen name='MainTabs' component={MainTabs} />
        <MainStack.Screen name='NewBO' component={NewBO} />
       <MainStack.Screen name='Cadastro' component={Cadastro} />
       <MainStack.Screen name="Login" component={Login} />
  
  
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
    >

      
    </SearchStackNavigator.Screen>
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
        component={About}
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
    <NavigationContainer initialRouteName="Login">
      <Main />
    </NavigationContainer>
  )
}