import React, {Component} from 'react';
import {BackgroundView, Text, Header} from '../../components';
import {View, StyleSheet, Image, Dimensions, FlatList} from 'react-native';
import axios from 'axios';
import GameItems from './components/GameItems';
import {Screen} from 'react-native-screens';
import {stackName} from '../../configs/navigationConstants';

export default class HomeScreen extends Component {
  state = {
    loading: true,
    listGame: [],
  };
  renderLeftComponent = (
    <View>
      <Text header>
        Hello <Text bold> CyberSoft,</Text>
      </Text>
      <Text>Best Game for today</Text>
    </View>
  );
  onPressGameItem = id => {
    this.props.navigation.navigate(stackName.detailStack, {id});
  };
  componentDidMount() {
    axios({method: 'GET', url: 'http://10.0.2.2:3000/games'})
      .then(res => this.setState({listGame: res.data, loading: false}))
      .catch(err => console.error(err));
  }
  render() {
    const {listGame, loading} = this.state;

    return (
      <BackgroundView>
        <Header
          LeftComponent={this.renderLeftComponent}
          RightComponent={<View style={styles.avatar} />}
        />
        <FlatList
          data={listGame}
          renderItem={({item}) => (
            <GameItems
              game={item}
              onPress={() => this.onPressGameItem(item.id)}
            />
          )}
          ItemSeparatorComponent={() => <View style={{height: 50}}></View>}
          contentContainerStyle={{paddingBottom: 60}}
          showsVerticalScrollIndicator={false}
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
