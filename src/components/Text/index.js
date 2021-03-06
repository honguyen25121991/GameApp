import {Text as RNText, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {COLORS} from '../../themes';

export default class Text extends Component {
  render() {
    const {
      children,
      color = COLORS.white,
      style,
      header,
      title,
      bold,
      subText,
    } = this.props;
    return (
      <RNText
        style={[
          {color},
          header && styles.header,
          bold && styles.bold,
          title && styles.title,
          subText && styles.subText,
          style,
        ]}>
        {children}
      </RNText>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
  },
  subText: {
    opacity: 0.7,
  },
});
