import React, { useEffect, useState } from "react";
import {Text, View, Image , TouchableOpacity , TextInput, ScrollView} from "react-native";
import { Actions } from 'react-native-router-flux';
import { GlobalStyles } from '../GlobaleStyle/GlobaleStyle1';

export default function home(){
      return (

    <View style={GlobalStyles.container}>
        <View style={GlobalStyles.barre}>
        <View>
        <Image
           style={{
             height: 40,
             width: 40,
              }}
           source={require('../img/im.png')}
          />
        </View>
            <View style={GlobalStyles.textBarre}>
                <Text>APK NAME</Text>
            </View>
            <TouchableOpacity style ={GlobalStyles.chatIcon} 
            onPress={() => Actions.chatt()}>
          <Image
           style={{
             height: 40,
             width: 30,
              }}
           source={require('../img/chatt.png')}
          />
          </TouchableOpacity>
        </View>

    <View>
          <ScrollView flashScrollIndicators={true}
          showsVerticalScrollIndicator={true}>
          
          </ScrollView>
    </View>
</View>
      );
  }
  