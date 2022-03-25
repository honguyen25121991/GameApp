import axios from 'axios';
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BackgroundView, Header} from '../../components';
import {COLORS} from '../../themes';
import {mapLocalHostToIp, sWidth} from '../../ultils';
import {Text} from '../../components';

export default class DetailSreens extends Component {
  state = {
    game: {},
  };
  componentDidMount() {
    axios({
      method: 'GET',
      url: `http://10.0.2.2:3000/games/${this.props.route.params.id}`,
    })
      .then(res => {
        const game = mapLocalHostToIp(res.data);
        console.log(game);
        this.setState({game: res.data});
      })
      .catch(err => console.log(err));
  }
  render() {
    const {
      game: {title, subTitle, icon, preview, backgroundColor},
    } = this.state;
    const imagesBackground = preview ? preview[0] : undefined;

    return (
      <BackgroundView edge={['bottom']}>
        <Image
          source={{uri: imagesBackground}}
          style={{backgroundColor: '#bbb', width: sWidth, height: 300}}
        />
        <BackgroundView style={{position: 'absolute'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={styles.backBottom}>
            <AntDesign name="close" size={30} color={COLORS.white} />
          </TouchableOpacity>
        </BackgroundView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'center',
          }}>
          <View style={{flex: 2}}>
            <Image
              source={{uri: icon}}
              style={{
                backgroundColor: '#bbb',
                width: 80,
                height: 80,
                borderRadius: 8,
              }}
            />
          </View>
          <View style={{flex: 4}}>
            <Text bold title>
              {title}
            </Text>
            <Text bold subText>
              {subTitle}
            </Text>
          </View>
          <View style={{flex: 1}}>
            <Ionicons name="cloud-download" size={30} color={COLORS.white} />
          </View>
        </View>
      </BackgroundView>
    );
  }
}
const styles = StyleSheet.create({
  backBottom: {
    backgroundColor: COLORS.opacityBlack,
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
