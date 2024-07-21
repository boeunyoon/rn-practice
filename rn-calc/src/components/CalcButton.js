import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import Button from './Button';
export const ButtonTypes = {
  NUMBER: 'NUMBER',
  OPERATOR: 'OPERATOR',
};
const Colors = {
  NUMBER: ['#71717a', '#3f3f46'],
  OPERATOR: ['#f59e0b', '#b45309'],
};
const CalcButton = ({ title, onPress, buttonStyle, buttonType }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: Colors[buttonType][0],
        },
        pressed && {
          backgroundColor: Colors[buttonType][1],
        },
        buttonStyle, //한 컴포넌트를 사용하여 여러 크기를 사용한다.
        buttonType,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  buttonType: ButtonTypes.NUMBER,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)), // -> buttonType: PropTypes.oneOf(Object.values([NUMBER, OPERATOR])),
};

const styles = {
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    color: '#ffffff',
  },
};
export default CalcButton;
