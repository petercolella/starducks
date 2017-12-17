import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F7F9' }}>
        <Text
          style={{
            marginTop: 200,
            color: '#9d9d9d',
            fontSize: 24,
            textAlign: 'center',
          }}
        >
          You know what to do :)
        </Text>
      </View>
    )
  }
}
