import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import ProductStack from './productStack'
import SingInStack from './signInStack';
import SingUpStack from './singUpStack';
import MyListStack from './myListStack';
import ProfileStack from './profileStack';
import FoundUs from './FoundUsStack';
import ContactStack from './ContactStack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import Payment from '../scenes/payment';
import paymentScreen from '../scenes/paymentScreen'



enableScreens();




const screens = {
    Home:{
        screen: HomeStack,
    },
    Product:{
        screen: ProductStack,
    },
    SignIn:{
        screen:SingInStack
    },
    SingUp:{
        screen:SingUpStack
    },
    myList:{
        screen:MyListStack
    },
    FoundUs :{
        screen:FoundUs
    },
    Contact : {
        screen: ContactStack
    },
    ProfileStack : {
        screen : ProfileStack
    },
    Payment: {
        screen: Payment
    },
    paymentScreen: {
        screen: paymentScreen
    }
  
}
const RootDrawerNavigator = createDrawerNavigator(screens)
export default createAppContainer(RootDrawerNavigator)
// export default ()=> {return <NavigationContainer> 
//     <RootDrawerNavigator />
// </NavigationContainer>}
