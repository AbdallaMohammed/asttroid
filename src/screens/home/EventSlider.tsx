import React from 'react';
import type { ViewToken } from 'react-native';
import { Animated } from 'react-native';

import { View } from '@/ui';

import type { EventType } from './data/events';
import { events } from './data/events';
import { EventItem } from './EventItem';

const EventPagination = ({
  items,
  paginationIndex,
}: {
  items: EventType[];
  paginationIndex: number;
}) => (
  <View className="mt-4 flex flex-row items-center justify-center">
    {items.map((_, index) => (
      <View
        className="mx-2 h-3 w-3 rounded-full"
        key={index}
        style={{
          backgroundColor: paginationIndex === index ? '#48CAE4' : '#C2C4C8',
        }}
      />
    ))}
  </View>
);

export const EventSlider = () => {
  const [paginationIndex, setPaginationIndex] = React.useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfigCallbackPairs = React.useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);

  return (
    <>
      <Animated.FlatList
        data={events}
        renderItem={({ item, index }) => <EventItem item={item} key={index} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <EventPagination items={events} paginationIndex={paginationIndex} />
    </>
  );
};
