import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./src/Theme";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Dashboard,
  LoginScreen,
  RegisterScreen,
  StartScreen,
} from "./src/Screens";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='StartScreen'
          screenOptions={{
            headerShown: false,
          }}>
          <Drawer.Screen name='StartScreen' component={StartScreen} />
          <Drawer.Screen name='LoginScreen' component={LoginScreen} />
          <Drawer.Screen name='RegisterScreen' component={RegisterScreen} />
          <Drawer.Screen name='Dashboard' component={Dashboard} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
