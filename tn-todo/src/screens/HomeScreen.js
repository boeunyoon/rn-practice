import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from '../components/Button';
import { useUserContext } from '../context/UserContext';
import { PRIMARY } from '../colors';

const HomeScreen = () => {
  const { setUser } = useUserContext();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          title={'SIGNOUT'}
          onPress={() => setUser(null)}
          buttonType={ButtonTypes.DANGER}
          disabled={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: {
    fontSize: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
});
export default HomeScreen;
