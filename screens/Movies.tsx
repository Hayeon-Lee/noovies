import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  background-color: ${(props) => props.theme.mainBgColor};
`;

const View = styled.View`
  flex: 1;
`;

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const API_KEY = process.env.REACT_APP_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const Movies: React.FC<NativeStackScreenProps<any, "Movies">> = ({
  navigation,
}) => {
  console.log(API_KEY);
  const getNowPlaying = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=KR",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Swiper
        loop
        timeout={3.5}
        controlsEnabled={false}
        containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
      >
        <View style={{ backgroundColor: "red" }}></View>
        <View style={{ backgroundColor: "blue" }}></View>
        <View style={{ backgroundColor: "yellow" }}></View>
        <View style={{ backgroundColor: "pink" }}></View>
      </Swiper>
    </Container>
  );
};

export default Movies;
