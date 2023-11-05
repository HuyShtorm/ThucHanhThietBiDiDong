import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ChooseDonut from './src/view/ChooseDonut'
import MainView from './src/view/MainView'
import Screen1 from './src/view/Screen1';
import Screen2 from './src/view/Screen2';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <MainView /> */}
      {/* <ChooseDonut /> */}
      <Stack.Navigator>
      <Stack.Screen name='ChooseDonut' component={ChooseDonut} options={{headerShown:false}}></Stack.Screen>
<Stack.Screen name='Main' component={MainView} options={{title:'Detail Donut'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
//<Stack.Screen name='Screen1' component={Screen1} options={{}}></Stack.Screen>
//<Stack.Screen name='Screen2' component={Screen2} options={{}}></Stack.Screen>
