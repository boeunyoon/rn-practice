import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import { PRIMARY, WHITE } from '../colors';
import { Image, Pressable, Text } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen
        name={'SignIn'}
        // component={SignInScreen}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <Image source={require('../../assets/BUDDY.png')} />
          ),
          headerRight: () => <Fontisto name="bell" size={24} color="black" />,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerShadowVisible: false,
        }}
      >
        {(screenProps) => <SignInScreen {...screenProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
