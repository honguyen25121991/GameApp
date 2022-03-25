import {Dimensions, Platform} from 'react-native';

const {height: sHeight, width: sWidth} = Dimensions.get('window');

const mapLocalHostToIp = source => {
  if (Platform.OS === 'android') {
    if (Array.isArray(source)) {
      return source.map(gameItem => {
        gameItem.icon = gameItem.icon.replace('localhost', '10.0.2.2');
        gameItem.preview = gameItem.preview.map(preview =>
          preview.replace('localhost', '10.0.2.2'),
        );
        return gameItem;
      });
    }
    source.icon = source.icon.replace('localhost', '10.0.2.2');
    source.preview = source.preview.map(preview =>
      preview.replace('localhost', '10.0.2.2'),
    );
    return source;
  }
};
export {sHeight, sWidth, mapLocalHostToIp};
