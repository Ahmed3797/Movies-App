import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Release = ({ status, date }) => {
  return (
    <View style={styles.rs}>
      <Text style={styles.st}>{status}</Text>
      <Text style={styles.dt}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "white",
    marginLeft: 20,
  },
  st: {
    backgroundColor: "#efcd55",
    padding: 6,
    borderRadius: 4,
    color: "black",
    fontSize: 20,
    fontWeight: "600",
    marginRight: 15,
  },
  dt: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
});

export default Release;
