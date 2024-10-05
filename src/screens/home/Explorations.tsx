import React from 'react';
import { FlatList } from 'react-native';

import { View } from '@/ui';
import { Heading } from '@/ui/Heading';

import { explorations } from './data/explorations';
import { ExplorationItem } from './ExplorationItem';

export const Explorations = () => {
  return (
    <View className="mt-6 space-y-4">
      <Heading title="Popular Explorations" withLink />

      <FlatList
        data={explorations}
        renderItem={({ item, index }) => (
          <ExplorationItem item={item} key={index} />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%' }}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 16,
        }}
      />
    </View>
  );
};
