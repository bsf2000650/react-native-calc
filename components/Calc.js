import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const Calc = () => {

  const [firstNumber,setFirstNumber] = useState();
  const [secondNumber,setSecondNumber] = useState();
  const [result,setResult] = useState();

  
  const add = () => {

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
   
    if(isNaN(num1)){
      num1 = 0
      setResult(num2)
    }
    else if(isNaN(num2)){
      num2 = 0
      setResult(num1)
    }
    else if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
    }
    else {
      setResult('Invalid input');
    }
  }
 
  
  const sub = () => {

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
   
    if(isNaN(num1)){
      num1 = 0
      setResult(num2)
    }
    else if(isNaN(num2)){
      num2 = 0
      setResult(num1)
    }
    else if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 - num2);
    }
    else {
      setResult('Invalid input');
    }
  }
 
  
  const multiply = () => {

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
   
    if(isNaN(num1)){
      num1 = 0
      setResult('Please provide the 1st number')
    }
    else if(isNaN(num2)){
      num2 = 0
      setResult('Please provide the 2nd number')
    }
    else if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 * num2);
    }
    else {
      setResult('Invalid input');
    }
  }
 
  
  const divide = () => {

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);
   
    if(isNaN(num1)){
      num1 = 0
      setResult('Please provide the 1st number')
    }
    else if(isNaN(num2)){
      num2 = 0
      setResult('Please provide the 2nd number')
    }
    else if (!isNaN(num1) && !isNaN(num2)) {
      setResult(num1 + num2);
    }
    else {
      setResult('Invalid input');
    }
  }

  return (
    <View style={[styles.container, Platform.OS === 'android' ? styles.androidStyle : styles.iosStyle]}>
      <Text style={styles.calcApp}>Calculator App</Text>
      <TextInput
        placeholder='Enter 1st number'
        style={styles.textInput}
        onChangeText={(firstNumber)=>setFirstNumber(firstNumber)}
      />
      <TextInput
        placeholder='Enter 2nd number'
        style={styles.textInput}
        onChangeText={(secondNumber)=>setSecondNumber(secondNumber)}
      />
      <Text style={styles.result}>{result}</Text>
      {/* <Button title='Add(+)' onPress={add} style={styles.button}/>
      <Button title='Sub(-)' onPress={sub} style={styles.button}/>
      <Button title='Mul(x)' onPress={multiply} style={styles.button}/>
      <Button title='Div(/)' onPress={divide} style={styles.button}/> */}
      <Text title='Add(+)' onPress={add} style={styles.button}>Add(+)</Text>
      <Text title='Add(+)' onPress={sub} style={styles.button}>Sub(-)</Text>
      <Text title='Add(+)' onPress={multiply} style={styles.button}>Mul(x)</Text>
      <Text title='Add(+)' onPress={divide} style={styles.button}>Div(/)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:22
  },
  iosStyle: {
    backgroundColor: 'lightblue',
  },
  androidStyle: {
    backgroundColor: 'lightgreen',
  },
  calcApp:{
      textAlign:'center',
      fontSize:30,
      margin: 10,
      fontWeight:'bold'
  }, 
  textInput:{
    fontSize:20,
    borderWidth:2,
    margin:5,
    paddingLeft:10
  },
  result:{
    fontSize:20,
    borderWidth:2,
    margin:5,
    paddingLeft:10
  },
  button:{
    color:'white',
    marginTop:10,
    padding:7,
    fontSize:25,
    textAlign:'center',
    backgroundColor:'blue'
  }
});

export default Calc;
