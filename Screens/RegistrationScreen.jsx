import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function RegistrationScreen() {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Реєстрація</Text>
          <View>
            <TextInput style={styles.input} placeholder="Логін" autoComplete="email" />
          </View>
           <View>
            <TextInput style={styles.input} placeholder="Адреса електронної пошти" autoComplete="password" />
          </View>
           <View>
            <TextInput style={styles.inputPas} placeholder="Пароль" autoComplete="password" />
      </View>
        <Text style={styles.textInput}>Показати</Text>
          <Button style={styles.button} title="Зареєстуватися" color="#FF6C00"  />
           <Text style={styles.title}>Вже є акаунт? Увійти</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 549,
    width: 410,
    bottom:0,
    backgroundColor: '#ffffff',
    position: 'absolute'
  },
  text: {
    color: '#212121',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: "bold",
    letterSpacing: 0.3,
    marginBottom: 33,
  },
  input: {
    paddingLeft: 16,
     height: 50,
    width: 343,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    marginBottom: 16,
  },
  inputPas: {
    paddingLeft: 16,
    height: 50,
    width: 343,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    marginBottom: 43,
    position: 'relative'
  },
  textInput: {
    color: '#1B4371',
    position: 'absolute',
    top: 310,
   left: 285,
  },
  button: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  title: {
    color: '#1B4371',
    marginTop:16,
  }
});