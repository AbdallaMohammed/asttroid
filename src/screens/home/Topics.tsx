import React from 'react';
import { FlatList } from 'react-native';

import { View } from '@/ui';
import { Heading } from '@/ui/Heading';

import { topics } from './data/topics';
import { TopicItem } from './TopicItem';

export const Topics = () => {
  return (
    <View className="mt-6 space-y-4">
      <Heading title="Popular Topics" />

      <FlatList
        data={topics}
        renderItem={({ item, index }) => <TopicItem item={item} key={index} />}
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
