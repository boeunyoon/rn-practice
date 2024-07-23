import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>ProfileScreen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container : {flex : 1, justifyContent : 'center', alignItems : 'center'},
    title:{
        fontSize : 20
    }
})
export default ProfileScreen;