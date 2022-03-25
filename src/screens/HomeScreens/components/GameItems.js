import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {sWidth} from '../../../ultils';
import {Text} from '../../../components';

export default class GameItems extends Component {
  render() {
    const {
      onPress,
      game: {title, subTitle, icon, preview, backgroundColor},
      loading,
    } = this.props;
    const backgroundImage = preview ? preview[0] : undefined;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: backgroundImage,
          }}
          style={styles.ImagesBackground}
        />
        <TouchableOpacity
          onPress={onPress}
          style={[styles.bannerContainer, {backgroundColor}]}>
          <Image
            source={{
              uri: 'icon',
            }}
            style={styles.gameIcon}
          />
          <View style={styles.titleContainer}>
            <Text bold title>
              {title}
            </Text>
            <Text subText>{subTitle}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {zIndex: 1},
  ImagesBackground: {width: sWidth, height: 200, backgroundColor: '#bbf'},
  bannerContainer: {
    position: 'absolute',
    bottom: -40,
    flexDirection: 'row',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    width: sWidth - 40,
  },
  gameIcon: {
    width: 70,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#bfb',
  },
  titleContainer: {width: '80%'},
});
