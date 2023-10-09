import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [assets] = useAssets([require("./my-study.jpg")]);
  const [fontsLoaded] = Font.useFonts(Ionicons.font);

  const onLayoutRootView = useCallback(async () => {
    if (assets && fontsLoaded) await SplashScreen.hideAsync();
  }, [assets, fontsLoaded]);

  if (!assets || !fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Text>We are done Loading !</Text>
    </View>
  );
}
