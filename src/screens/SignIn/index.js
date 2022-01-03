import React from "react";
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
    return(
        <Container>
            <BarberLogo width="100%" height="160"/>

            <InputArea>
                <SignInput IconSvg={EmailIcon}/>
                <SignInput IconSvg={LockIcon}/>

            <CustomButton>
                <CustomButtonText>Login</CustomButtonText>
            </CustomButton>

            </InputArea>

            <SignMessageButton>
                <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
                <SignMessageButtonTextBold>Registe-se!</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}