import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert,Button } from 'react-native';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {inputText: ''};
  }
  _onPressButton(){
    Alert.alert('Your data has been submitted to the system!')
  }

  render() {
    return (

      <View style={ {padding: 100} }>

        <Text style={styles.textstil}>Welcome to BUDGETPACK</Text>

        <TextInput style={ {height: 40} }
        placeholder="Please enter your budget"
        keyboardType= 'numeric'
        onChangeText={ (inputText)=>this.setState( {inputText} ) } />

        <Text style={ {padding:10,fontSize:16} } >
        Your budget is:{this.state.inputText}
        </Text>

        <Button
          onPress={this._onPressButton}
          title="Submit" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  textstil: {
    fontSize: 26,
    color: 'red',
  },
});
