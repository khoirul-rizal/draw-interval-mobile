/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainScreen from './MainScreen';
import {SafeAreaView, ScrollView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MainScreen />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
