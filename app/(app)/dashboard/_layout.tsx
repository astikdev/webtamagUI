import { Stack } from 'expo-router';
import React from 'react';

const DashboardLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(core)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default DashboardLayout;
