import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    top: {
      marginTop: 50,
      marginBottom: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
    decal: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 20,
      marginBottom: 10,
    },
    middle: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottom: {
      marginTop: 40,
      marginBottom: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 10,
      width: 350,
      height: 120,
      padding: 10,
      marginBottom: 10,
    },
    textButton: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    blueButton: {
      backgroundColor: 'blue',
      color: 'white',
      width: 350,
      height: 40,
      borderRadius: 10,
      justifyContent: 'center',
    },
    redButton: {
      backgroundColor: 'red',
      marginHorizontal: 10,
      color: 'white',
      width: 130,
      height: 60,
      borderRadius: 10,
      justifyContent: 'center',
    },
    reloadButton: {
      width: 60,
    },
  });

  export default styles;