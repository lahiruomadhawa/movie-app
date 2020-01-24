/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Hm from './Screens/Home'
import S1 from './Screens/S1_mr_robot'
import S2 from './Screens/S2_better_call_soul'
import S3 from './Screens/S3_homeland'
import S4 from './Screens/S4_silicon_valley'
import S5 from './Screens/S5_walking_dead'
import S6 from './Screens/S6_south_park'
import S7 from './Screens/S7_got'
import S8 from './Screens/S8_house_of_cards'
import S9 from './Screens/S9_BB_theory'
import S10 from './Screens/S10_narcos'
import S11 from './Screens/S11_black_missor'
import S12 from './Screens/S12_stranger_things'
import S13 from './Screens/S13_westworld'

const App = createStackNavigator({
    Hm : {screen : Hm},
    S1 : {screen : S1},
    S2 : {screen : S2},
    // S3 : {screen : S3},
    // S4 : {screen : S4},
    // S5 : {screen : S5},
    // S6 : {screen : S6},
    // S7 : {screen : S7},
    // S8 : {screen : S8},
    // S9 : {screen : S9},
    // S10 : {screen : S10},
    // S11 : {screen : S11},
    // S12 : {screen : S12},
    // S13 : {screen : S13},
  });
  
  
  export default createAppContainer(App);
  
