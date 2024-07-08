import React,{useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  StatusBar
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import useFetch from "../hooks/use-fetch-hook";
import CardsList from "../components/CardsList";
import Release from "../components/Release";
import Genre from "../components/Genre";
import { API_KEY } from "../urls";

const { height: viewportheight } = Dimensions.get("window");

const MovieScreen = ({ route, navigation }) => {

  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const { id } = route.params;
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const similarMoviesUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`;
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (error) {
    return (
      <Text style={styles.errorText}>Error fetching data: {error.message}</Text>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.cont}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: `${IMAGE_BASE_URL}${data.poster_path}` }}
          resizeMode="cover"
        />
        <LinearGradient
          colors={[
            "transparent",
            "rgba(0,0,0,0.6)",
            "rgba(0,0,0,0.8)",
            "rgba(0,0,0,1)",
          ]}
          locations={[0.3, 0.7, 0.85, 1]}
          style={styles.gradient}
        />

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            style={styles.bb}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{data.title}</Text>
      </View>

      <View style={styles.bimage}>
        <Release status={data.status} date={data.release_date} />
        <View style={styles.gens}>
          {data.genres.map((item) => {
            return <Genre key={item.id} data={item.name} />;
          })}
        </View>

        <Text style={styles.over}>{data.overview}</Text>

        <CardsList
          navigation={navigation}
          url={similarMoviesUrl}
          text="Similar Movies"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loading: {
    backgroundColor: "#1B1122",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bimage: {
    borderRadius: 20,
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#1B1122",
    position: "relative",
    top: -27,
  },
  gens: {
    flexDirection: "row",
    marginLeft: 20,
  },
  over: {
    color: "white",
    fontStyle: "italic",
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "500",
  },
  cont: {
    backgroundColor: "#1B1122",
    flexGrow: 1,
    paddingBottom: 20,
  },
  bb: {
    borderRadius: 20,
    padding: 5,
    backgroundColor: "rgba(255,255,255,0.5)",
  },
  container: {
    height: viewportheight * 0.65, 
    width: "100%",
    marginBottom: 10,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%", 
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  title: {
    position: "absolute",
    bottom: 30,
    left: 20,
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginTop: 16,
  },
});

export default MovieScreen;
