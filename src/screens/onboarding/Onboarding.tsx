import React from 'react';

import { useIsFirstTime } from '@/hooks/useIsFirstTime';
import { Button, FocusAwareStatusBar, SafeAreaView, Text, View } from '@/ui';

import { Cover } from './Cover';

export const Onboarding = () => {
  const [_, setIsFirstTime] = useIsFirstTime();

  return (
    <View className="flex h-full items-center justify-center">
      <FocusAwareStatusBar />
      <View className="w-full flex-1">
        <Cover />
      </View>
      <View>
        <Text className="my-3 text-center text-5xl font-bold text-white">
          Asteroid
        </Text>
        <Text className="mb-2 text-center text-lg text-gray-300">
          The right way to learn more about space
        </Text>
      </View>
      <SafeAreaView className="mt-6">
        <Button
          variant="outline"
          label="Let's Get Started "
          onPress={() => {
            setIsFirstTime(false);
          }}
        />
      </SafeAreaView>
    </View>
  );
};
