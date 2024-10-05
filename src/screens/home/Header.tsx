import React from 'react';

import {
  BellIcon,
  FilterIcon,
  Image,
  SearchIcon,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from '@/ui';

const User = () => (
  <View className="flex flex-row items-center gap-2">
    <Image
      source={require('@/ui/images/user.jpg')}
      className="h-6 w-6 rounded-full"
      resizeMode="cover"
    />
    <Text className="text-base font-normal text-white">Mohamed Lotfy</Text>
  </View>
);

const Notifications = () => (
  <TouchableOpacity className="rounded-lg bg-[#1D3E62] p-1">
    <BellIcon color="white" />
  </TouchableOpacity>
);

const SearchTools = () => (
  <View className="flex flex-row gap-2">
    <View className="flex flex-1 flex-row items-center rounded-lg bg-white px-4 py-2">
      <SearchIcon color="black" />
      <TextInput
        placeholder="Search..."
        className="ml-2 p-0 text-sm text-black"
      />
    </View>

    <TouchableOpacity className="justify-center rounded-lg bg-white p-2">
      <FilterIcon color="#000814" />
    </TouchableOpacity>
  </View>
);

export const Header = () => {
  return (
    <View className="mx-2 rounded-b-3xl bg-[#0E1438] px-8 pb-10 pt-6">
      <View className="mb-6 flex flex-row items-center justify-between">
        <User />
        <Notifications />
      </View>
      <SearchTools />
    </View>
  );
};
