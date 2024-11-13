import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useMedia } from 'tamagui';

const IssuesLayout = () => {
  const media = useMedia();
  const { t } = useTranslation('hodLayout');

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: !media.gtSm,
          title: t('tabs.issues'),
          headerTitleAlign: 'center',
          headerLeft: () => null,
          headerBackVisible: false,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          title: t('tabs.viewIssue'),
          headerShown: !media.gtSm,
          headerTitleAlign: 'center',
          headerBackVisible: true,
        }}
      />
    </Stack>
  );
};

export default IssuesLayout;
