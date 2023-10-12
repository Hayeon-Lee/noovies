import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { BLACK_COLOR } from "../colors";

const Btn = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: ${(props) => (props.selected ? BLACK_COLOR : "yellow")};
`;

const Movies = ({ navigation: { navigate } }) => {
  return (
    <Btn
      onPress={() => navigate("Stack", { screen: "Three" })}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Title selected={false}>Movies</Title>
      <Title selected={true}>Movies</Title>
    </Btn>
  );
};

export default Movies;
