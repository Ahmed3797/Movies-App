import React from "react";
import { View, Image, StyleSheet, Dimensions, Pressable } from "react-native";
import Carousel from "react-native-snap-carousel";
import useFetch from "../hooks/use-fetch-hook";
import { API_KEY } from "../urls";

const { width: viewportWidth } = Dimensions.get("window");

const Slider = ({ navigation }) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
  const { data, loading, error } = useFetch(url);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const renderItem = ({ item, index }) => (
    <Pressable
      onPress={() => {
        navigation.navigate("Movies", { id: item.id });
      }}
    >
      <View key={index} style={styles.slide}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </Pressable>
  );

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      key={data.id}
      sliderWidth={viewportWidth}
      itemWidth={viewportWidth - 120}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    borderRadius: 8,
    height: 420,
    padding: 5,
    marginLeft: 0,
    marginRight: 0,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderRadius: 4,
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginTop: 10,
  },
});

export default Slider;
