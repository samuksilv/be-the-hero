import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Incident from "../src/pages/Incidents/index";
import Detail from "../src/pages/Detail/index";

const AppStack = createStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{ headerShown: false}} >
                <AppStack.Screen name="Incident" component={Incident} />
                <AppStack.Screen name="Detail" component={Detail} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
