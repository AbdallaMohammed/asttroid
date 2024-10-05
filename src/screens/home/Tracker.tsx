import React from 'react';
import { Dimensions } from 'react-native';

import { Text, View } from '@/ui';
import { Heading } from '@/ui/Heading';

export const Tracker = () => {
  const { width } = Dimensions.get('screen');

  return (
    <View className="mt-2 space-y-4">
      <Heading title="Progress Tracker" />

      <View
        className="rounded-full border-2 border-white"
        style={{ width: width - 48 }}
      >
        <View
          className="rounded-full bg-[#0E1438]"
          style={{ height: 35, width: (width - 48) / 2 }}
        >
          <Text className="ml-4 mt-1 text-base font-semibold text-white">
            50%
          </Text>
        </View>
      </View>
    </View>
  );
};
