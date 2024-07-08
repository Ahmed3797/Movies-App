import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import useFetch from "../hooks/use-fetch-hook";
import Card from "./Card";
const CardsList = ({ navigation, url, text }) => {
  const { data, loading, error } = useFetch(url);

  return (
    <>
      <Text style={styles.txt}>{text}</Text>
      <ScrollView horizontal={true}>
        {data.map((item) => {
          return <Card key={item.id} navigation={navigation} item={item} />;
        })}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  txt: {
    color: "white",
    paddingLeft: 20,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default CardsList;
