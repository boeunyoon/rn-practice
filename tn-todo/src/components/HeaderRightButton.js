import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const HeaderRightButton = ({ tintColor }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('setting');
      }}
      hitSlop={10}
    >
      <Entypo name="cog" size={24} color={tintColor} />
    </Pressable>
  );
};
export default HeaderRightButton;
