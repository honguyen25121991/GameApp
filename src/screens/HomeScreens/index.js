import React, {Component} from 'react';
import {BackgroundView, Text, Header} from '../../components';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import axios from 'axios';
const {height: sHeight, width: sWidth} = Dimensions.get('window');

export default class HomeScreen extends Component {
  state = {
    loading: true,
    game: {},
  };
  renderLeftComponent = (
    <View>
      <Text header>
        Hello <Text bold> CyberSoft,</Text>
      </Text>
      <Text>Best Game for today</Text>
    </View>
  );
  componentDidMount() {
    axios({method: 'GET', url: 'http://10.0.2.2:3000/games'})
      .then(res => this.setState({game: res.data[0], loading: false}))
      .catch(err => console.error(err));
  }
  render() {
    console.log(this.state);
    console.log(sWidth, sHeight);

    const {
      game: {title, subTitle, icon, preview, backgroundColor},
      loading,
    } = this.state;

    return (
      <BackgroundView>
        <Header
          LeftComponent={this.renderLeftComponent}
          RightComponent={<View style={styles.avatar} />}
        />
        {!loading && (
          <View>
            <Image
              source={{
                uri: preview[0],
              }}
              style={{width: sWidth, height: 200, backgroundColor: '#bbb'}}
            />
            <View
              style={{
                flexDirection: 'row',
                backgroundColor,
                marginHorizontal: 20,
                paddingHorizontal: 20,
                paddingVertical: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: icon,
                }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 8,
                  backgroundColor: '#bbb',
                }}
              />
              <View style={{width: '70%'}}>
                <Text bold>{title}</Text>
                <Text>{subTitle}</Text>
              </View>
            </View>
          </View>
        )}
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
