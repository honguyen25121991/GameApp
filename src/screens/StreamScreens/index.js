import {Text, View, Image} from 'react-native';
import React, {Component} from 'react';

export default class StreamSreens extends Component {
  render() {
    return (
      <View>
        <Text>StreamSreens1</Text>
        <Image
          source={{
            uri: 'http://10.0.2.2:3000/images/Alto_0.png',
          }}
          style={{width: '100%', height: 200}}
        />
        <Text>1243</Text>
      </View>
    );
  }
}
