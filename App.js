import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useAssets } from "expo-asset";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import Root from "./navigation/Root";
import { lightTheme, darkTheme } from "./styled";

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
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer onReady={onLayoutRootView}>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
