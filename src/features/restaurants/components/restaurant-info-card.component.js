import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaruant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://thumbor.thedailymeal.com/ulpCLfzgisooEeQA23oJAi6bvLE=//https://www.thedailymeal.com/sites/default/files/story/2017/0-MAIN_Avocado%20Burger_istock_edit.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaruant;

  return (
    <Card style={styles.card}>
      <Card.Cover key={name} source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Title title={name} style={styles.title} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 10, backgroundColor: "white" },
  title: { alignContent: "center" },
});
