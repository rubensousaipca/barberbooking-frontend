import React, { useEffect, useContext } from "react";
import { Container, LoadingIcon } from './styles';
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { UserContext } from '../../contexts/UserContext'

//Importar Api
//import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg'

export default () => {

    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() =>{
        const checkToken = async () => {
            const token = await AsyncStorageLib.getItem('token');
            if (token) {
                // let res = await Api.checkToken(token);
                //if(res.token){
                await AsyncStorageLib.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar:json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });

               //} else {
                    //navigation.navigate('SignIn')
               //} 
            } else {
                navigation.navigate('MainTab');
            }
        }
        checkToken();
    })
    return(
        <Container>
            <BarberLogo width='100%' height="160" />
            <LoadingIcon size='large' color='#ffffff'/>
        </Container>
    );
}