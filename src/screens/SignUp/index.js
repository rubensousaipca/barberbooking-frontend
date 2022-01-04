import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import { UserContext } from '../../contexts/UserContext'

import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from './styles';

import Api from '../../api';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg'
import PersonIcon from '../../assets/person.svg'


import SignInput from "../../components/SignInput";


export default () => {

    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState ('');
    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField!= '' && passwordField != ''){
            let res= await Api.signUp(nameField, emailField, passwordField);
            if (res.token){
                
            await AsyncStorageLib.setItem('token', res.token);

            userDispatch({
                type: 'setAvatar',
                payload:{
                    avatar:res.data.avatar
                }
            });

            navigation.reset({
                routes:[{name:'MainTab'}]
            });

            }else{
                alert("Erro: "+res.error )
            }
        }else{
            alert("Preencha todos os campos!");
        }

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });

    }

    return(
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>

            <SignInput 
                IconSvg={PersonIcon}
                placeholder= "Digite o seu primeiro e último nome"
                value = {nameField}
                onChangeText={t=>setNameField(t)}
                />

                <SignInput 
                IconSvg={EmailIcon}
                placeholder= "Digite o seu e-mail..."
                value = {emailField}
                onChangeText={t=>setEmailField(t)}
                />

                <SignInput 
                IconSvg={LockIcon}
                placeholder= "Digite a sua palavra-passe..."
                value = {passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
                />

            <CustomButton onPress={handleSignClick}>
                <CustomButtonText>Registar</CustomButtonText>
            </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Entre!</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}