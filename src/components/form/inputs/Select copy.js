import React, { Component } from 'react'
import { View } from 'react-native'

import {Picker} from '@react-native-community/picker';

export default class Cadastro extends Component {
  state = {
    language: 'java',
  };
  render() {
    return (
      <View>
        <Picker
  selectedValue={this.state.language}
  style={{height: 50, width: 100}}
  onValueChange={(itemValue, itemIndex) =>
    this.setState({language: itemValue})
  }>
  <Picker.Item label="Java" value="java" />
  <Picker.Item label="JavaScript" value="js" />
</Picker>
      </View>
    )
  }
}
