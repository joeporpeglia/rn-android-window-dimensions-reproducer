/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useWindowDimensions, View} from 'react-native';

function App(): React.JSX.Element {
  const height = useWindowDimensions().height;

  return (
    <View
      style={{backgroundColor: 'red', flex: 1}}
      onLayout={e =>
        console.log(
          'outer',
          e.nativeEvent.layout.height,
          e.nativeEvent.layout.width,
        )
      }>
      <View
        style={{backgroundColor: 'blue', height}}
        onLayout={e =>
          console.log(
            'inner',
            e.nativeEvent.layout.height,
            e.nativeEvent.layout.width,
          )
        }
      />
    </View>
  );
}

export default App;
