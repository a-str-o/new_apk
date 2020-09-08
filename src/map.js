
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image , Button , TouchableOpacity} from "react-native";

export default function someting() {
    return (
      <View>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{
            height: 300,
            width: 300,
          }}
          source={require('../img/app.png')}
        />
      </TouchableOpacity>
  </View>

    );
}
