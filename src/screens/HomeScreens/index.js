import React, {Component} from 'react';
import {BackgroundView, Text, Header} from '../../components';
import {View, StyleSheet} from 'react-native';

export default class HomeScreen extends Component {
  renderLeftComponent = (
    <View>
      <Text header>
        Hello <Text bold> CyberSoft,</Text>
      </Text>
      <Text>Best Game for today</Text>
    </View>
  );

  render() {
    return (
      <BackgroundView>
        <Header
          LeftComponent={this.renderLeftComponent}
          RightComponent={<View style={styles.avatar} />}
        />
      </BackgroundView>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#bbb',
  },
});
