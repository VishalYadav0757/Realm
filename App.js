import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Animals from './src/Animals';

const AppNavigator = createStackNavigator(
  {
    Animals: Animals
  }
);

export default createAppContainer(AppNavigator);