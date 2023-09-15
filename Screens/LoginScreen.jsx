import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
     <View style={styles.container}>
      <Text>Увійти</Text>
           <View>
            <TextInput style={styles.input} placeholder="Адреса електронної пошти" autoComplete="password" />
          </View>
           <View>
            <TextInput style={styles.input} placeholder="Пароль" autoComplete="password" />
          </View>
          <Button title="Увійти" />
           <Text>Немає акаунту? Зареєструватися</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});