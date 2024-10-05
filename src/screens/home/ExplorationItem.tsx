import React from 'react';

import { Image, PlayIcon, Text, TouchableOpacity, View } from '@/ui';

import type { ExplorationType } from './data/explorations';

export type Props = {
  item: ExplorationType;
};

export const ExplorationItem = ({ item }: Props) => (
  <View className="flex flex-col justify-center rounded-3xl bg-[#0E1438] px-6 pb-4 pt-6">
    <Image source={require('@/ui/images/planet.png')} />

    <Text className="text-xs font-semibold text-[#48CAE4]">{item.name}</Text>
    <Text className="w-[120px] text-xs text-white">{item.excerpt}</Text>

    <View className="mt-2 items-end">
      <TouchableOpacity className="self-right rounded-full bg-[#0A528B] p-2">
        <PlayIcon color="white" />
      </TouchableOpacity>
    </View>
  </View>
);
