import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { ComponentType } from 'react';
import * as React from 'react';
import { Animated, StyleSheet } from 'react-native';
import type { SvgProps } from 'react-native-svg';

import { Favorites, Home, Profile, Quiz } from '@/screens';
import { HeartIcon, HomeIcon, QuizIcon, UserIcon } from '@/ui';

type TabParamList = {
  Home: undefined;
  Favorites: undefined;
  Quiz: undefined;
  Profile: undefined;
};

type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
};

export type TabList<T extends keyof TabParamList> = {
  navigation: NativeStackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};

const tabs: TabType[] = [
  {
    name: 'Home',
    component: Home,
    label: 'Home',
  },
  {
    name: 'Favorites',
    component: Favorites,
    label: 'Favorites',
  },
  {
    name: 'Quiz',
    component: Quiz,
    label: 'Quiz',
  },
  {
    name: 'Profile',
    component: Profile,
    label: 'Profile',
  },
];

const tabsIcons: TabIconsType = {
  Home: (props: SvgProps) => <HomeIcon {...props} />,
  Favorites: (props: SvgProps) => <HeartIcon {...props} />,
  Quiz: (props: SvgProps) => <QuizIcon {...props} />,
  Profile: (props: SvgProps) => <UserIcon {...props} />,
};

const Tab = createBottomTabNavigator<TabParamList>();

type BarIconType = {
  name: keyof TabParamList;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => {
  const translateX = React.useRef(new Animated.Value(0)).current;
  const indicatorWidth = 36;

  const handleTabChange = (index: number) => {
    Animated.spring(translateX, {
      toValue: index * 94,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarInactiveTintColor: '#C2C4C8',
          tabBarActiveTintColor: 'white',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <BarIcon name={route.name} color={color} />
          ),
          tabBarStyle: {
            position: 'relative',
            backgroundColor: '#0E1438',
            marginHorizontal: 8,
            borderTopEndRadius: 24,
            borderTopStartRadius: 24,
            height: 75,
            paddingTop: 16,
            paddingBottom: 12,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            fontFamily: 'Poppins',
          },
        })}
      >
        <Tab.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          {tabs.map(({ name, component, label }, index) => {
            return (
              <Tab.Screen
                key={name}
                name={name}
                component={component}
                options={{
                  title: label,
                }}
                listeners={{
                  tabPress: () => handleTabChange(index),
                }}
              />
            );
          })}
        </Tab.Group>
      </Tab.Navigator>
      <Animated.View
        style={{
          ...style.indicator,
          ...{ transform: [{ translateX }], width: indicatorWidth },
        }}
      />
    </>
  );
};

const style = StyleSheet.create({
  indicator: {
    position: 'absolute',
    bottom: 60,
    left: 36,
    backgroundColor: 'white',
    height: 5,
    borderRadius: 2,
  },
});
