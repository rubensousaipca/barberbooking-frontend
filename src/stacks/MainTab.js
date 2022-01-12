import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



const Tab = createBottomTabNavigator();

export default () => (
    <TabNavigator>
        <TabScreen name="Home" component={Home} />
        <TabScreen name="Search" component={Search} />
        <TabScreen name="Appointments" component={Appointments} />
        <TabScreen name="Favorites" component={Favorites} />
        <TabScreen name="Profile" component={Profile} />
    </TabNavigator>
)