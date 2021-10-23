import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Components
import RestaurantItem from './Components/Restaurant/RestaurantItem'
import Menu from './Components/Menu/Menu'
import ProfileButton from './Components/Authentication/Profile/ProfileButton'
import Prof from './Components/Authentication/Profile/Prof'

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
          title: 'Calorey',
          headerRight: () => (
            <ProfileButton />
          ),
        }}
        />
        <Stack.Screen name="MenuScreen" 
        component={Menu} 
        options={{ title: 'Calorey' }}
        />
        <Stack.Screen name="ProfileScreen" 
        component={Prof} 
        options={{ title: 'Calorey' }}
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
