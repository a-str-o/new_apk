import React, { Component } from 'react';
import 
{ Text, View, ScrollView,  Image ,
  TouchableOpacity, Dimensions } from 'react-native';
import Contacts from './contacts';
import Calls from './calls';
import { GlobalStyles } from '../../GlobaleStyle/GlobaleStyle1';
var deviceWidth = Dimensions.get('window').width;

export default class Chatt extends React.Component {

  render() {
    return (
<View style={GlobalStyles.containerChat}>
   <View style={GlobalStyles.groupchat}>
      <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: 0 }) }} activeOpacity={0.5}>
      <Text style={GlobalStyles.title }>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { this.scroll.scrollTo({ x: deviceWidth }) }} activeOpacity={0.5}>
        <Text style={GlobalStyles.title }>Calls</Text>
        </TouchableOpacity>
    </View>
<View>
        <ScrollView horizontal={true} pagingEnabled={true}
         showsHorizontalScrollIndicator={true}
         snapToAlignment={true}
         flashScrollIndicators={true}
        ref={(node) => this.scroll = node}>
     <View style={GlobalStyles.screenView}>
          <Contacts/>
     </View>
      <View style={GlobalStyles.screenView}>
          <Calls/>
      </View>
      </ScrollView>
  </View>
</View>
    );
  }
}