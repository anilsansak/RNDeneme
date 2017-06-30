import React from 'react';
import { StyleSheet, Text, View,TextInput,Alert,Button } from 'react-native';
import { StackNavigator,withNavigation} from 'react-navigation';

export default class myApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    console.log("deneme1");
  }
  static navigationOptions = {
    title: 'Welcome',

  };
  render() {
    console.log("navigatepre");
    const { navigate } = this.props.navigation;
    console.log("navigate");
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', {user: 'Lucy'})}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}
const App = StackNavigator( {
  Home: {screen: myApp },
  Chat: { screen: ChatScreen },
});
const styles = StyleSheet.create({
  textstil: {
    fontSize: 26,
    color: 'red',
  },
});
