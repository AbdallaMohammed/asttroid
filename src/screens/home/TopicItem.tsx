import React from 'react';
import { Dimensions } from 'react-native';

import { Image, PlayIcon, Text, TouchableOpacity, View } from '@/ui';

import type { TopicType } from './data/topics';

export const TopicItem = ({ item }: { item: TopicType }) => {
  const { width } = Dimensions.get('screen');

  return (
    <View style={{ position: 'relative' }}>
      <Image
        source={require('@/ui/images/black-hole.png')}
        style={{
          width: (width - 60) / 2,
        }}
      />

      <View
        className="flex flex-row items-center justify-between px-4"
        style={{
          position: 'absolute',
          zIndex: 2,
          bottom: 18,
          width: '100%',
          overflow: 'hidden',
        }}
      >
        <Text className="text-xs font-semibold text-white">{item.name}</Text>

        <TouchableOpacity className="self-right rounded-full bg-[#0A528B] p-2">
          <PlayIcon color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
