import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const Calc1 = () => {
  const keys = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '+', '='];
  const [input, setInput] = useState('');
  const [result,setResult] = useState('');

  const onButtonPress = (value) => {
    if(value === '='){
        try {
            setResult(eval(input))
        } catch (error) {
            setResult('error')
        }
    } else if(value === 'C') {
        setInput('');
        setResult('');
    } else {
        setInput(input + value)
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputText}
                value={input}
                onChangeText={setInput}
                keyboardType='numeric'
            />
      </View>
      <View style={styles.buttonContainer}>
        {keys.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => onButtonPress(item)}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    position: 'relative',
    borderRadius: 20, // Apply border-radius here
  },
  resultContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    // marginTop:-100,
    margin:20,
    borderWidth:1,
    borderColor:'white',
    borderRadius:20
  },
  resultText: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  inputContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  inputText:{
    fontSize:30,
    color:'white',
    marginTop:-350,
    marginRight:15,
    borderColor:'white',
    borderWidth:1,
    borderRadius:10,
    padding:10,
    width:"90%",
    textAlign:'right'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -30,
    right: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // padding: 10,
    justifyContent: 'flex-end',
  },
  button: {
    width: '20%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#424242',
    margin: 5,
    borderRadius: 10,
    backgroundColor: '#333333',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default Calc1;
