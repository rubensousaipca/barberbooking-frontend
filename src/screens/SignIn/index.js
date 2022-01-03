import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from './styles';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg'

import SignInput from "../../components/SignInput";


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState ('');
    const [passwordField, setPasswordField] = useState ('');

    const handleSignClick = () => {


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