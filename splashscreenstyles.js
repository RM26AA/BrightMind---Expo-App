import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6A00',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
