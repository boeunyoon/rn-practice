import { StyleSheet, Text, TextInput, View } from "react-native";
import PropTypes from "prop-types";
import { BLACK, GRAY, PRIMARY } from "../colors";
import { forwardRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export const KeyboardType = {
  DEFAULT: "default",
  EMAIL: "email-address",
};
export const ReturnKeyTypes = {
  DONE: "done",
  NEXT: "next",
};
export const IconNames = {
  EMAIL: "email",
  PASSWORD: "lock",
};
const Input = forwardRef(
  (
    {
      title,
      placeholder,
      value,
      onChangeText,
      iconName,
      // keyboardType,
      // returnKeyType,
      // secureTextEntry,
      ...props
    },
    ref
  ) => {
    const [isFocus, setIsFocus] = useState(false);
    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title,
            value && styles.hasValueTitle,
            isFocus && styles.focusedTitle,
          ]}
        >
          {title}
        </Text>
        <View>
          <TextInput
            {...props} //전개를 통해 몇가지 부분을 skip가능, 가장 위에 위치해야함r
            style={[
              styles.input,
              value && styles.hasValueInput,
              isFocus && styles.focusedInput,
            ]}
            ref={ref}
            placeholder={placeholder ?? title}
            placeholderTextColor={GRAY.DEFAULT}
            autoCapitalize={"none"}
            autoCorrect={false}
            textContentType={"none"}
            onChangeText={onChangeText}
            onBlur={() => setIsFocus(false)}
            onFocus={() => setIsFocus(true)}
            // keyboardType={keyboardType}
            // returnKeyType={returnKeyType}
            // secureTextEntry={secureTextEntry}
          />
          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={(() => {
                switch (true) {
                  case isFocus:
                    return PRIMARY.DEFAULT;
                  case !!value:
                    return BLACK;
                  default:
                    return GRAY.DEFAULT;
                }
              })()}
            />
          </View>
        </View>
      </View>
    );
  }
);
Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  // keyboardType: PropTypes.oneOf(Object.values(KeyboardType)),
  // returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  focusedTitle: {
    color: PRIMARY.DEFAULT,
    fontWeight: 600,
  },
  focusedInput: {
    borderWidth: 2,
    color: PRIMARY.DEFAULT,
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 42,
    paddingLeft: 30,
  },
  hasValueTitle: {
    color: BLACK,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  icon: {
    position: "absolute",
    left: 8,
    height: "100%",
    justifyContent: "center",
  },
});
export default Input;
