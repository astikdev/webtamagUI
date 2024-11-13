import { Atom, Bell, Folders, Menu, Power, Users } from '@tamagui/lucide-icons';
import { Routes } from 'constants/Routes';
import { Href, Stack } from 'expo-router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ListItem,
  Separator,
  View,
  XStack,
  YGroup,
  YStack,
} from 'tamagui';

const HODLayoutLg: React.FC<{
  logout: () => React.ReactNode;
  onTabPress: (url: Href<string>) => void;
}> = ({ logout, onTabPress }) => {
  const [siderbarVisible, setSidebarVisible] = useState(true);
  const { t } = useTranslation('hodLayout');

  const renderMenu = () => {
    return (
      <Button
        onPress={() => setSidebarVisible((prev) => !prev)}
        ml="$6"
        icon={Menu}
      />
    );
  };

  const renderHeaderRight = () => {
    return () => (
      <XStack gap="$4" ai="center" jc="center">
        {logout()}
      </XStack>
    );
  };

  const NotificationIconWithBadge = () => (
    <XStack ai="center">
      <Bell />
    </XStack>
  );

  return (
    <View f={1}>
      <XStack f={1}>
        {siderbarVisible && (
          <YStack
            enterStyle={{
              x: '$20',
            }}
            animation="quick"
            animateOnly={['transform']}
            w="$20"
            paddingVertical="$4"
            gap="$4">
            <XStack jc="center">
              <Atom size="$10" />
            </XStack>
            <YGroup br="$0" separator={<Separator />}>
              <YGroup.Item>
                <ListItem
                  onPress={() => onTabPress(Routes.APP_DASHBOARD)}
                  pressTheme
                  icon={Atom}
                  title={t('tabs.dashboard')}
                  size="$6"
                  hoverStyle={{ cur: 'pointer' }}
                />
              </YGroup.Item>
              <YGroup.Item>
                <ListItem
                  onPress={() => onTabPress(Routes.APP_DASHBOARD_CORE_TEAMS)}
                  hoverTheme
                  pressTheme
                  icon={Users}
                  title={t('tabs.teams')}
                  size="$6"
                  hoverStyle={{ cur: 'pointer' }}
                />
              </YGroup.Item>
              <YGroup.Item>
                <ListItem
                  onPress={() => onTabPress(Routes.APP_DASHBOARD_CORE_ISSUES)}
                  hoverTheme
                  pressTheme
                  icon={Folders}
                  title={t('tabs.issues')}
                  size="$6"
                  hoverStyle={{ cur: 'pointer' }}
                />
              </YGroup.Item>
              <YGroup.Item>
                <ListItem
                  onPress={() =>
                    onTabPress(Routes.APP_DASHBOARD_CORE_NOTIFICATION)
                  }
                  hoverTheme
                  pressTheme
                  icon={NotificationIconWithBadge}
                  title={t('tabs.notification')}
                  size="$6"
                  hoverStyle={{ cur: 'pointer' }}
                />
              </YGroup.Item>
            </YGroup>
          </YStack>
        )}
        <View f={1} blw="$0.5" bc="$gray5Dark">
          <Stack>
            <Stack.Screen
              name="index"
              options={{
                title: t('tabs.dashboard'),
                headerBackVisible: false,
                headerLeft: renderMenu,
                headerRight: renderHeaderRight(),
              }}
            />
            <Stack.Screen
              name="teams"
              options={{
                title: t('tabs.teams'),
                headerBackVisible: false,
                headerLeft: renderMenu,
                headerRight: renderHeaderRight(),
              }}
            />
            <Stack.Screen
              name="issues"
              options={{
                title: t('tabs.issues'),
                headerBackVisible: false,
                headerLeft: renderMenu,
                headerRight: renderHeaderRight(),
              }}
            />
            <Stack.Screen
              name="notification"
              options={{
                title: t('tabs.notification'),
                headerBackVisible: false,
                headerLeft: renderMenu,
                headerRight: renderHeaderRight(),
              }}
            />
          </Stack>
        </View>
      </XStack>
    </View>
  );
};

export default HODLayoutLg;
