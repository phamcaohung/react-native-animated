import { GestureHandlerRootView } from "react-native-gesture-handler";
import TabScreens from "./components/TabScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MainTabs' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MainTabs" component={TabScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}


