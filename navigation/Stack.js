import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, TouchableOpacity } from "react-native";

const ScreenOne = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Two")}>
    <Text style={{ color: "white" }}>One</Text>
  </TouchableOpacity>
);
const ScreenTwo = ({ navigation: { navigate } }) => (
  <TouchableOpacity onPress={() => navigate("Three")}>
    <Text style={{ color: "white" }}>Two</Text>
  </TouchableOpacity>
);
const ScreenThree = ({ navigation: { setOptions } }) => (
  <TouchableOpacity onPress={() => setOptions({ title: "Hello!" })}>
    <Text style={{ color: "white" }}>Change title</Text>
  </TouchableOpacity>
);

const NativeStack = createNativeStackNavigator();

const Stack = () => (
  <NativeStack.Navigator
    screenOptions={{
      headerTintColor: "yellow",
      headerBackTitleVisible: false,
    }}
  >
    <NativeStack.Screen name="One" component={ScreenOne} />
    <NativeStack.Screen name="Two" component={ScreenTwo} />
    <NativeStack.Screen name="Three" component={ScreenThree} />
  </NativeStack.Navigator>
);

export default Stack;
