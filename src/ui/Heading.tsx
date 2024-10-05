import React from 'react';

import { Text, TouchableOpacity, View } from './core';

export const Heading = ({
  title,
  withLink = false,
}: {
  title: string;
  withLink?: boolean;
}) => (
  <View className="flex flex-row items-center justify-between rounded-3xl bg-[#0E1438] px-4 py-2">
    <Text className="text-base font-semibold text-white">{title}</Text>

    {withLink && (
      <TouchableOpacity>
        <Text className="text-sm text-[#48CAE4]">See all</Text>
      </TouchableOpacity>
    )}
  </View>
);
