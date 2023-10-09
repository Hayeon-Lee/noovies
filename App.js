import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      //startLoading
      try {
        await Font.loadAsync(Ionicons.font);
        await Asset.loadAsync(require("./my-study.jpg"));
        await Image.prefetch("https://nomadcoders.co/m-gray.svg");
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        //onError
        console.warn(error);
      } finally {
        //onFinish
        setReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (ready) await SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Text>We are done Loading !</Text>
    </View>
  );
}
