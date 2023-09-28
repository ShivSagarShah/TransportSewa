import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Login from './src/Login';
import Page from './src/Page';
import History from './src/History';
import Search from './src/Search';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Page" 
            component={Page}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="History" 
            component={History}
            options={{ headerShown: true }}
          />
          <Stack.Screen 
            name="Search" 
            component={Search}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

    // <Login />
    // <Page/>
    // <View style={styles.container}>
    //   <Text>Hello</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
