import { ActivityIndicator, Pressable, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { DANGER, GRAY, PRIMARY, WHITE } from '../colors';
export const ButtonTypes = {
  PRIMARY: 'PRIMARY',
  DANGER: 'DANGER',
};
const Button = ({ title, onPress, disabled, loading, buttonType }) => {
  const colors = { PRIMARY, DANGER };
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.contianer,
        { backgroundColor: colors[buttonType].DEFAULT },
        pressed && { backgroundColor: colors[buttonType].DARK },
        disabled && { backgroundColor: colors[buttonType].LIGHT },
      ]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size={'small'} color={GRAY.DEFAULT} />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
};
Button.proptypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  buttonType: PropTypes.oneOf(Object.values(ButtonTypes)),
};
const styles = StyleSheet.create({
  contianer: {
    backgroundColor: PRIMARY.DEFAULT,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 20,
  },
});
export default Button;
