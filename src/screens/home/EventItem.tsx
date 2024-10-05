import React from 'react';
import { Dimensions } from 'react-native';

import { Image, Text, TouchableOpacity, View } from '@/ui';

import type { EventType } from './data/events';

type Props = {
  item: EventType;
};

const { width } = Dimensions.get('screen');

const EventBadge = ({ className }: { className?: string }) => (
  <View className={`${className} rounded-3xl bg-[#1D3E62] px-4 py-2`}>
    <Text className="text-xs font-semibold text-white">Upcoming Event</Text>
  </View>
);

export const EventItem = ({ item }: Props) => (
  <TouchableOpacity
    className="rounded-3xl bg-[#0E1438] p-6"
    style={{ width: width - 48 }}
  >
    <View className="flex flex-row items-center justify-between gap-9">
      <View className="flex flex-col items-start space-y-4">
        <EventBadge />
        <Text className="text-base font-semibold text-white">{item.name}</Text>
        <Text className="text-white">Timer</Text>
      </View>

      <Image source={require('@/ui/images/event-image.png')} />
    </View>
  </TouchableOpacity>
);
