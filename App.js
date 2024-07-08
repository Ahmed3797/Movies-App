
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import SearchScreen from './screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1B1122', // Custom header background color
        },
        headerTintColor: '#fff', // Custom header text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      
      >
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerTitle:"MOVIE APP"}}
        />
        <Stack.Screen name="Movies" component={MovieScreen} 

        options={{headerShown:false}}

        />
        <Stack.Screen name="Search" component={SearchScreen}
        options={{headerTitle:"Search"}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


