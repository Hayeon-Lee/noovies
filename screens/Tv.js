import React from "react";
import { View, Text } from "react-native";
import { BLACK_COLOR } from "../colors";

const Tv = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: BLACK_COLOR }}>TV</Text>
    </View>
  );
};

export default Tv;
