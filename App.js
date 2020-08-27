
import React, { Component } from 'react';
import 
{ StyleSheet, 
  Text, View, ScrollView, 
  Dimensions, Image ,
  TouchableOpacity, Button } from 'react-native';
import Home from './src/home';
import Favorite from './src/favorite';
import Profile from './src/profile';
import Map from './src/map';
import Search from './src/saerch';

var deviceWidth = Dimensions.get('window').width;

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.barreTop}>
      </View>
        <ScrollView horizontal={true} pagingEnabled={true}
         showsHorizontalScrollIndicator={true}
        ref={(node) => this.scroll = node}>
          <View style={styles.firstView}>
          <Home/>
          </View>

          <View style={styles.secondView}>
            <Search/>
          </View>

          <View style={styles.thirdView}>
            <Map/>
          </View>

          <View style={styles.forthView}>
            <Favorite/>
          </View>
          <View style={styles.fiveView}>
          <Profile/>
          </View>
        </ScrollView>
        <View style={styles.MainContainer}> 
    <View style={styles.ImageIconStyle}>
      <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: 0 }) }} activeOpacity={0.5}>
        <Image
          style={{
            height: 40,
            width: 30,
          }}
          source={require('./img/img16.png')}
        />
      </TouchableOpacity>
  </View>
<View style={styles.ImageIconStyle}>
  <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth }) }} activeOpacity={0.5}>
    <Image
      style={{
        height: 40,
        width: 30,
      }}
      source={require('./img/img17.png')}
    />
  </TouchableOpacity>
</View>
<View style={styles.ImageIconStyle}>
  <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth  * 2 }) }} activeOpacity={0.5}>
    <Image
    style={{
      height: 40,
      width: 30,
    }}
    source={require('./img/img18.png')}
  />
</TouchableOpacity>
</View>
<View style={styles.ImageIconStyle}>
  <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth  * 3 }) }} activeOpacityé={0.5}>
    <Image
    style={{
      height: 40,
      width: 30,
    }}
    source={require('./img/img22.png')}
  />
</TouchableOpacity>
</View>
<View style={styles.ImageIconStyle}>
  <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth  * 4 }) }} activeOpacity={0.5}>
    <Image
    style={{
      height: 40,
      width: 30,
    }}
    source={require('./img/img20.png')}
  />
</TouchableOpacity>
</View>
</View> 
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    width: deviceWidth,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  ImageIconStyle: {
    bottom: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D40000",
  },
  barreTop:{
    height: 28,
  },
  firstView: {
    width: deviceWidth,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  Cadre: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  secondView: {
    width: deviceWidth,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  thirdView: {
    width: deviceWidth,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  forthView: {
    width: deviceWidth,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  fiveView: {
    width: deviceWidth,   
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
});