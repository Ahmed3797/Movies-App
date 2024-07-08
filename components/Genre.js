import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Genre = ({ data }) => {
  return (
    <View style={styles.gnr}>
      <Text style={styles.gnrtxt}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gnr: {
    backgroundColor: "rgba(255,255,255,0.15)",
    color: "white",
    marginRight: 10,
    marginTop: 15,
    padding: 10,
    borderRadius: 4,
  },
  gnrtxt: {
    color: "white",
  },
});

export default Genre;
