import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
} from "react-native";
import useFetch from "../hooks/use-fetch-hook";
import { SearchBar } from "@rneui/themed";
import { API_KEY } from "../urls";

const SearchScreen = ({ route, navigation }) => {
  const [query, setQuery] = useState(route.params.query);
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  const handleSearch = () => {
    if (query.length > 0) {
      console.log("I am in search screen");
    }
  };

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
  const { data, loading, error } = useFetch(url);

  function render({ item }) {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate("Movies", { id: item.id });
        }}
      >
        <View style={styles.item}>
          <Image
            source={{ uri: `${IMAGE_BASE_URL}${item.poster_path}` }}
            style={styles.imagess}
            resizeMode="cover"
          />
          <Text style={styles.resultItem}>{item.title}</Text>
        </View>
      </Pressable>
    );
  }
  return (
    <View style={styles.container}>
      <SearchBar
        lightTheme={false}
        rounded={true}
        onSubmitEditing={handleSearch}
        containerStyle={{
          backgroundColor: "transparaent",
          borderRadius: 0,
          border: "none",
          borderColor: "transparent",
          shadowOffset: 0,
        }}
        inputContainerStyle={{
          backgroundColor: "rgba(255,255,255,0.05)",
          border: "none",
        }}
        placeholder="Type Here..."
        onChangeText={setQuery}
        value={query}
      />

      {loading && <ActivityIndicator size="large" color="#fff" />}
      {error && (
        <Text style={styles.errorText}>
          Error fetching data: {error.message}
        </Text>
      )}

      <FlatList
        style={styles.list}
        contentContainerStyle={styles.flatListContainer}
        numColumns={2}
        data={data || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={render}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1B1122",
  },
  resultItem: {
    padding: 8,
    color: "white",
  },

  imagess: {
    height: 270,
    width: "100%",
    borderRadius: 6,
  },
  flatListContainer: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  item: {
    width: 183,
    height: 340,
    margin: 5,
    alignItems: "center",
  },
});

export default SearchScreen;
