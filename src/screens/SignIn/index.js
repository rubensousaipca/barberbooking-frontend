import React, {useState, useContext} from 'react';
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

import Api from '../../Api';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg'

import SignInput from "../../components/SignInput";


export default () => {
    const { dispatch: userDispatch} = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField)
            if (json.token) {
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
                
            } else {
                alert('Email e/ou senha errados!');
            }
        }else{
            
            alert("Preencha os campos vazios!");
        }

    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });

    }

    return(
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>
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
                <CustomButtonText>Login</CustomButtonText>
            </CustomButton>

            </InputArea>

            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Registe-se!</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}