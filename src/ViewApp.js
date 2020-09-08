
import React, { Component } from 'react';
import 
{ Text, View, ScrollView, 
  Dimensions, Image ,
  TouchableOpacity, Button } from 'react-native';
import Home from './home';
import Favorite from './favorite';
import Profile from './profile';
import Map from './map';
import Search from './saerch';
import { GlobalStyles } from '../GlobaleStyle/GlobaleStyle1';

var deviceWidth = Dimensions.get('window').width;

export default class App extends React.Component {

  render() {
    return (
      <View style={GlobalStyles.container}>
        <ScrollView horizontal={true} pagingEnabled={true}
         showsHorizontalScrollIndicator={true}
         flashScrollIndicators={true}
        ref={(node) => this.scroll = node}>
          <View style={GlobalStyles.screenView}>
          <Home/>
          </View>

          <View style={GlobalStyles.screenView}>
            <Search/>
          </View>

          <View style={GlobalStyles.screenView}>
            <Map/>
          </View>

          <View style={GlobalStyles.screenView}>
            <Favorite/>
          </View>
          <View style={GlobalStyles.screenView}>
          <Profile/>
          </View>
        </ScrollView>
        <View style={GlobalStyles.MainContainer}> 
    <View style={GlobalStyles.ImageIconStyle}>
      <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: 0 }) }} activeOpacity={0.5}>
        <Image
          style={{
            height: 40,
            width: 30,
          }}
          source={require('../img/img16.png')}
        />
      </TouchableOpacity>
  </View>
<View style={GlobalStyles.ImageIconStyle}>
  <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth }) }} activeOpacity={0.5}>
    <Image
      style={{
        height: 40,
        width: 30,
      }}
      source={require('../img/img17.png')}
    />
  </TouchableOpacity>
</View>
<View style={GlobalStyles.ImageIconStyle}>
  <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth  * 2 }) }} activeOpacity={0.5}>
    <Image
    style={{
      height: 40,
      width: 30,
    }}
    source={require('../img/img18.png')}
  />
</TouchableOpacity>
</View>
<View style={GlobalStyles.ImageIconStyle}>
  <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth  * 3 }) }} activeOpacityé={0.5}>
    <Image
    style={{
      height: 40,
      width: 30,
    }}
    source={require('../img/img22.png')}
  />
</TouchableOpacity>
</View>
<View style={GlobalStyles.ImageIconStyle}>
  <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth  * 4 }) }} activeOpacity={0.5}>
    <Image
    style={{
      height: 40,
      width: 30,
    }}
    source={require('../img/img20.png')}
  />
</TouchableOpacity>
</View>
</View> 
      </View>
      
    );
  }
}