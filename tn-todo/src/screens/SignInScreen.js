import {
  Alert,
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import Input, {
  IconNames,
  KeyboardType,
  ReturnKeyTypes,
} from '../components/Input';
import SafeInputView from '../components/SafeInputView';
import { useContext, useEffect, useRef, useState } from 'react';
import Button, { ButtonTypes } from '../components/Button';
import { signIn } from '../api/auth';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserContext from '../context/UserContext';
const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!disabled && !loading) {
      Keyboard.dismiss();
      setLoading(true);
      try {
        const data = await signIn(email, password);
        setUser(data);
      } catch (e) {
        Alert.alert('Sigin in Error', e.message);
      }
    }
  };
  return (
    <SafeInputView
      style={styles.avoid}
      behavior={Platform.select({ ios: 'padding' })}
    >
      <SafeAreaView style={styles.container}>
        {/* <Text>Sign in Screen</Text> */}
        {/* 로컬 경로에 있는 이미지 로드시 -> require 아니면 uri 사용 */}
        {/* 사진 파일 뒤에 @2x와 같이 크기를 지정하여 이름을 지으면 기기에 맞춰 적절한 이미지를 자동으로 로드한다. */}
        {/* 리액트 네이티브는 dp라는 단위를 사용한다. 자동으로 적용 */}
        <Image
          source={require('../../assets/main.png')}
          style={styles.image}
          resizeMode={'cover'}
        />
        <Input
          title={'email'}
          placeholder={'your@email.com'}
          keyboardType={KeyboardType.EMAIL}
          returnKeyType={ReturnKeyTypes.NEXT}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          iconName={IconNames.EMAIL}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <Input
          ref={passwordRef}
          title={'password'}
          placeholder={''}
          keyboardType={KeyboardType.DEFAULT}
          returnKeyType={ReturnKeyTypes.DONE}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          iconName={IconNames.PASSWORD}
          onSubmitEditing={onSubmit}
        />
        <View style={styles.buttonContainer}>
          <Button
            title={'LOGIN'}
            onPress={onSubmit}
            disabled={disabled}
            loading={loading}
            buttonType={ButtonTypes.PRIMARY}
          />
        </View>
      </SafeAreaView>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  avoid: {
    flex: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});
export default SignInScreen;
