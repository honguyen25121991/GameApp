import {View, Image} from 'react-native';
import React, {Component} from 'react';
import {Text} from '../../components';

export default class StreamSreens extends Component {
  render() {
    return (
      <View>
        <Text>StreamSreens</Text>
        <Image
          source={{
            uri: 'http://localhost:3000/images/Alto_0.png',
          }}
          style={{width: '100%', height: 200, backgroundColor: '#bbb'}}
        />
        <Text>12435111</Text>
      </View>
    );
  }
}
