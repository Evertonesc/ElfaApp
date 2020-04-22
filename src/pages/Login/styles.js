import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f5',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      flex: 1,
   
    },
    imageLogo: {
      marginBottom: 50,
      height:105,
      width:200
    },
    inputView: {
        width: '80%',
        backgroundColor: '#FFF',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding:20,
        
    },
    inputText: {
      height: 50,
      color: 'black'
    },
    forgot: {
      color: 'black',
      fontSize: 11
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#ff8c00',
      borderRadius: 25,
      height:50,
      alignItems: 'center',
      justifyContent: 'center', 
      marginTop: 40,
      marginBottom: 10
    },
    loginText: {
      color: 'white'
    }
  });