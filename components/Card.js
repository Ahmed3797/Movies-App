import React from "react";
import { Image, StyleSheet, Pressable } from "react-native";

const Card = ({ navigation, item }) => {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <Pressable
        onPress={() => {
          navigation.navigate("Movies", { id: item.id });
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
          resizeMode="contain"
        />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 230,
    width: 150,
    margin: 10,
    borderRadius: 18,
  },
});

export default Card;
