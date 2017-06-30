
import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

const Hello = ({ screen, goto, navigate }) => (
  <View style={styles.container}>
    <Text style={styles.paragraph}>Hello {screen}</Text>
    <Button title={'Go to ' + goto} onPress={() => navigate(goto)} />
  </View>
)

class ExampleScreenA extends Component {
  static navigationOptions = { title: "ExampleScreenA" };
  render() { return (<Hello screen='ExampleScreenA' goto='ScreenB' navigate={this.props.navigation.navigate} />) }
}
class ExampleScreenB extends Component {
  static navigationOptions = { title: "ExampleScreenB" };
  render() { return (<Hello screen='ExampleScreenB' goto='ScreenA' navigate={this.props.navigation.navigate} />) }
}

export const StackHome = StackNavigator({
  ScreenA: { screen: ExampleScreenA },
  ScreenB: { screen: ExampleScreenB },
}, {headerMode: 'screen'});



export default class App extends Component {
  render() {
    return (
      <StackHome />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
