import { StatusBar } from "expo-status-bar";
import AuthStack from "./navigation/AuthStack";
import { NavigationContainer } from "@react-navigation/native";
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <AuthStack/>
    </NavigationContainer>
  );
};

export default App;
