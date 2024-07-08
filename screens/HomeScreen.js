import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Slider from "../components/Slider";
import CardsList from "../components/CardsList";
import { SearchBar } from "@rneui/themed";
import { url1, url2, url3 } from "../urls";

const HomeScreen = ({ navigation }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.length > 0) {
      navigation.navigate("Search", { query });
    }
  };
  return (
    <ScrollView style={styles.cont}>
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
          color: "white",
        }}
        inputContainerStyle={{
          backgroundColor: "rgba(255,255,255,0.05)",
          border: "none",
        }}
        placeholder="Type Here..."
        onChangeText={setQuery}
        value={query}
      />
      <Slider navigation={navigation} />
      <CardsList navigation={navigation} url={url1} text="Now Playing" />
      <CardsList navigation={navigation} url={url2} text="UpComing" />
      <CardsList navigation={navigation} url={url3} text="Popular" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: "#1B1122",
    color: "white",
  },
  name: {
    fontSize: 20,
    color: "white",
    paddingLeft: 10,
    fontWeight: "800",
  },
});

export default HomeScreen;
