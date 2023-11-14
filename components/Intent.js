import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import { Button } from 'react-native-elements';

const Stack = createNativeStackNavigator();

const Intent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='NavigationButtons' component={NavigationButtons}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const NavigationButtons = (props) => {
    return (
        <>
            <Text>NavigationButtons</Text>
            <Button
                title='Go to Home Page'
                onPress={()=>props.navigation.navigate('HomeScreen')}
            />
        </>
    )
}

export default Intent
