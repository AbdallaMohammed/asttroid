import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { useIsFirstTime } from '@/hooks/useIsFirstTime';
import { Onboarding } from '@/screens';

import { NavigationContainer } from './NavigationContainer';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

export const Root = () => {
  const [isFirstTime] = useIsFirstTime();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        animation: 'none',
      }}
    >
      {isFirstTime ? (
        <Stack.Screen name="Onboarding" component={Onboarding} />
      ) : (
        <Stack.Screen name="App" component={TabNavigator} />
      )}
    </Stack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
};
