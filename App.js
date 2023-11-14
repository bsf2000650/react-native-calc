import React, { Component } from 'react';
import Calc from './components/Calc';
import Activity from './components/Activity';
import { View,StyleSheet } from 'react-native';
import  Component1  from './components/Component1';
import Intent from './components/Intent';
import Calc1 from './components/Calc1';


const App = () => {

  return (
    <View style={[styles.container, Platform.OS === 'android' ? styles.androidStyle : styles.iosStyle]}>
      {/* <Calc /> */}
      <Calc1 />
      {/* <Activity name={'Asad'} age={23} semester={'7th'}/> */}
      {/* <Intent /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 22,
    borderWidth:1,
    backgroundColor: '#3498db',
    borderRadius: 20, // Apply border-radius here
  },
  iosStyle: {
    backgroundColor: 'lightblue',
  },
  androidStyle: { 
    borderRadius:100,
  }
})

export default App;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from './components/SplashScreen';
// import MainScreen from './components/MainScreen';

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen name="MainScreen" component={MainScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 22,
//     borderWidth:1,
//     backgroundColor: '#3498db',
//     borderRadius: 20, // Apply border-radius here
//   },
//   iosStyle: {
//     backgroundColor: 'lightblue',
//   },
//   androidStyle: { 
//     borderRadius:100,
//   }
// })

// export default App;







