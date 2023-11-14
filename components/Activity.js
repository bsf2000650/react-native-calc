import React from 'react';
import {View,Text} from 'react-native'

const Activity = (props) => {
  return (
   <>
     {/* <View>Intent (Props) in Mobile App</View> */}
     <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',margin:10}}>Activity Data Passing (Props) in Mobile App</Text>
     <Text style={{fontSize:15,fontWeight:'bold',marginTop:10}}> Name : {props.name}</Text>
     <Text style={{fontSize:15,fontWeight:'bold',marginTop:10}}>  Age : {props.age}</Text>
     <Text style={{fontSize:15,fontWeight:'bold',marginTop:10}}> Semester : {props.semester}</Text>
   </>
  )
}

export default Activity



// import React, { Component } from 'react';
// import Calc from './components/Calc';
// import Activity from './components/Activity';
// import { View,StyleSheet } from 'react-native';
// import  Component1  from './components/Component1';
// import Intent from './components/Intent';
// import Calc1 from './components/Calc1';


// const App = () => {

//   return (
//     <View style={[styles.container, Platform.OS === 'android' ? styles.androidStyle : styles.iosStyle]}>
//       {/* <Calc /> */}
//       {/* <Calc1 /> */}
//       <Activity name={'Asad'} age={23} semester={'7th'}/>
//       {/* <Intent /> */}
//     </View>
//   )
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

// export default App




