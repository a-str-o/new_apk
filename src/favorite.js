
import React, { useEffect, useState } from "react";
import { View, Image , Button , TouchableOpacity} from "react-native";

export default function someting() {
    return (
      <View>
      <TouchableOpacity activeOpacity={0.5}>
        <Image
          style={{
            height: 100,
            width: 100,
          }}
          source={require('../img/img22.png')}
        />
      </TouchableOpacity>
  </View>

    );
}
