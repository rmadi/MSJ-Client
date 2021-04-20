import React, { useState} from 'react';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import FromInput from '../components/FormInput';


import { StyleSheet, Text, View, Platform, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const signIn = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
        source={require('../../assets/logo.jpeg')}
        style={styles.logo}
      />

            <FromInput 
              labelValue={email}
               onChangeText={(userEmail) => setEmail(userEmail)}
               placeholderText="Email"
               iconType="user"
               keyboardType="email-address"
               autoCapitalize="none"
               autoCorrect={false}/>
            <FromInput  
            labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}/>

            <FormButton buttonTitle="Sign In"/>
            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>

            

        </ScrollView>

    )
}

export default signIn

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });
  