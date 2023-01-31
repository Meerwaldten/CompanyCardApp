import { StatusBar } from 'expo-status-bar';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Github er det bedste sted at dele kode</Text>
        <Text></Text>
        <Text></Text>
        <Image
            source={{
              uri: 'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png',
            }}
            style={{width: 300, height: 200}}
        />
        <Text></Text>
        <Text></Text>
        <Text style={styles.titleText}>Begynd at del i dag!</Text>
        <Text>Eller lad vær!</Text>
        <Text>... Det ville bare være sejere hvis i gjorde...</Text>
        <Text></Text>
        <Text></Text>
        <Button
              title="Press me"
              onPress={() => Alert.alert('Gotcha')}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
