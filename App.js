import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import RestaurantItem from './Components/Restaurant/RestaurantItem'
import Menu from './Components/Menu/Menu'
import Profile from './Components/Authentication/Profile/Profile'
import ProfileButton from './Components/Authentication/Profile/ProfileButton'


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#9c6'
          },
          headerTitleStyle: {
            fontFamily: 'ChalkboardSE-Bold',
            fontWeight: 'bold',
            fontSize: 35,
            textAlign: 'center',
            marginTop: 25,
            shadowColor: '#000',
            shadowOffset: {width: 1, height: 1},
            shadowOpacity: 1,
            color: '#fff'
          },
          headerBackTitleVisible: false
        }}
        >
        <Stack.Screen name="ListScreen" 
        component={RestaurantItem} 
        options={{
          title: 'Callorey',
          headerRight: () => (
            <ProfileButton />
          ),
        }}
        />
        <Stack.Screen name="MenuScreen" 
        component={Menu} 
        options={{ title: 'Callorey' }}
        />
        <Stack.Screen name="ProfileScreen" 
        component={Profile} 
        options={{ title: 'Callorey' }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
