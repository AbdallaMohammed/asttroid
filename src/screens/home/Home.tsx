import React from 'react';

import { ScrollView } from '@/ui';

import { EventSlider } from './EventSlider';
import { Explorations } from './Explorations';
import { Header } from './Header';
import { Topics } from './Topics';
import { Tracker } from './Tracker';

export const Home = () => {
  return (
    <>
      <Header />

      <ScrollView className="my-2 px-6">
        <EventSlider />
        <Explorations />
        <Tracker />
        <Topics />
      </ScrollView>
    </>
  );
};
