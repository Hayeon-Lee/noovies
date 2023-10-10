import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View, Image, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset, useAssets } from "expo-asset";
import * as Font from "expo-font";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import Tabs from "./navigation/Tabs";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [assets] = useAssets([require("./my-study.jpg")]);
  const [fontsLoaded] = Font.useFonts(Ionicons.font);
  const isDark = useColorScheme() === "dark";

  const onLayoutRootView = useCallback(async () => {
    if (assets && fontsLoaded) await SplashScreen.hideAsync();
  }, [assets, fontsLoaded]);

  if (!assets || !fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer
      onReady={onLayoutRootView}
      theme={isDark ? DarkTheme : DefaultTheme}
    >
      <Tabs />
    </NavigationContainer>
  );
}
