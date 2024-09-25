import { Slot, Stack, router, useNavigationContainerRef } from 'expo-router';
import { useEffect, useState } from 'react';
import { Routes } from 'constants/Routes';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

const App = () => {
  const rootNavigation = useNavigationContainerRef();

  const [isNavigationReady, setNavigationReady] = useState(false);
  const { t } = useTranslation('navigation');

  useEffect(() => {
    const unsubscribe = rootNavigation?.addListener('state', (event) => {
      // console.log("INFO: rootNavigation?.addListener('state')", event);
      setNavigationReady(true);
    });
    return function cleanup() {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [rootNavigation]);

  if (!isNavigationReady) {
    return <Slot />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: t('home'),
        }}
      />
    </Stack>
  );
};

export default App;
