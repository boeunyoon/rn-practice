import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { GRAY, PRIMARY, WHITE } from "../colors";
const Button = ({ title, onPress, disabled, loading }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.contianer,
        pressed && { backgroundColor: PRIMARY.DARK },
        disabled && { backgroundColor: PRIMARY.LIGHT },
      ]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={GRAY.DEFAULT} />
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
};
const styles = StyleSheet.create({
  contianer: {
    backgroundColor: PRIMARY.DEFAULT,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    color: WHITE,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 20,
  },
});
export default Button;
