import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , ImageBackground} from 'react-native';
import LogoImage from './Screens/PhotoBG.png'
// import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
     <View style={styles.container}>
    <ImageBackground source={LogoImage} resizeMode="cover" style={styles.image}>
        {/* <RegistrationScreen /> */}
        <LoginScreen/>
    </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
