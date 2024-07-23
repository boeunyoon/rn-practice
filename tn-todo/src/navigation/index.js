import { useUserContext } from '../context/UserContext';
import ContentTab from './ContentTab';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';

const Navigation = () => {
  const { user } = useUserContext();
  return (
    <NavigationContainer>
      {user ? <ContentTab /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigation;
