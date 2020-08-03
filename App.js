import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Students from './screen/students'
import Attendances from './screen/attendance'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }  
}

var AppNavigator = createSwitchNavigator({
  
  Students:Students,
  Attendances:Attendances
})

const AppContainer = createAppContainer(AppNavigator);

