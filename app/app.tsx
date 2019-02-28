import React, { Component } from 'react';
import { Text, View } from 'react-native';

// tslint:disable-next-line:no-shadowed-variable
export const App = class App extends Component {
  public render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white' }}>
        <Text>Hello Pilog!</Text>
      </View>
    );
  }
}
