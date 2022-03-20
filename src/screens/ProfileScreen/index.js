import {Text, View} from 'react-native';
import React, {Component} from 'react';
import BackgroundView from '../../components/BackgroundView';

export default class ProfileScreen extends Component {
  render() {
    return (
      <BackgroundView>
        <View>
          <Text>Profile Screen</Text>
        </View>
      </BackgroundView>
    );
  }
}
