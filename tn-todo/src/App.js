import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './context/UserContext';
import Navigation from './navigation';
const App = () => {
  return (
    <UserProvider>
      <StatusBar style="dark" />
      <Navigation />
    </UserProvider>
  );
};

export default App;
