import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Input, { KeyboardType, ReturnKeyTypes } from "../components/Input";

const TestAvoid = () => {
  return (
    //heigh, padding을 사용시 padding을 사용하여 핵결
    <KeyboardAvoidingView
      style={styles.avoid}
      behavior={Platform.select({ ios: "position" })}
      contentContainerStyle={{ flex: 1 }}
    >
      <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
        <View style={[styles.view, { backgroundColor: "#047857" }]}>
          <Image
            source={require("../../assets/main.png")}
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>
        <View style={[styles.view, { backgroundColor: "#0369a1" }]}>
          <Input
            title={"email"}
            placeholder={"your@email.com"}
            keyboardType={KeyboardType.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            title={"email"}
            placeholder={"your@email.com"}
            keyboardType={KeyboardType.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            title={"email"}
            placeholder={"your@email.com"}
            keyboardType={KeyboardType.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            title={"email"}
            placeholder={"your@email.com"}
            keyboardType={KeyboardType.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
          <Input
            title={"email"}
            placeholder={"your@email.com"}
            keyboardType={KeyboardType.EMAIL}
            returnKeyType={ReturnKeyTypes.NEXT}
          />
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  avoid: {
    flex: 1,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default TestAvoid;
