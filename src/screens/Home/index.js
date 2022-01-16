import React from 'react';
import {Text} from 'react-native';
import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LocationArea,
    LocationInput,
    LocationFinder,

    
} from './styles'

import SearchIcon from '../../assets/search.svg'
import MyLocationIcon from '../../assets/my_location.svg'


export default () => {
    return(
        <Container>
            <Scroller>

                <HeaderArea>
                    <HeaderTitle numberOfLines={2}>Encontre o seu barbeiro favorito</HeaderTitle>
                    <SearchButton>
                        <SearchIcon width="26" height="26" fill="#FFFFFF" />
                    </SearchButton>
                </HeaderArea>
                
                <LocationArea>
                    <LocationInput/>
                    <LocationFinder>
                        <MyLocationIcon width="24" height="24" fill="#FFFFFF"/>
                    </LocationFinder>
                </LocationArea>
            </Scroller>
        </Container>
    );
}