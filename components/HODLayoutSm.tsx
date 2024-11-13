import { Atom, Bell, Folders, Users } from '@tamagui/lucide-icons';
import { Routes } from 'constants/Routes';
import { Href, Tabs } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'tamagui';

const HODLayoutSm: React.FC<{
  logout: () => React.ReactNode;
  onTabPress: (url: Href<string>) => void;
}> = ({ logout, onTabPress }) => {
  const theme = useTheme();
  const { t } = useTranslation('hodLayout');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
        tabBarBadgeStyle: {
          fontSize: 12,
          paddingHorizontal: 1,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: t('tabs.dashboard'),
          tabBarIcon: ({ color }) => <Atom color={color} />,
          headerRight: logout,
          href: Routes.APP_DASHBOARD,
        }}
        listeners={{
          tabPress: () => onTabPress(Routes.APP_DASHBOARD),
        }}
      />
      <Tabs.Screen
        name="teams"
        options={{
          title: t('tabs.teams'),
          tabBarIcon: ({ color }) => <Users color={color} />,
          href: Routes.APP_DASHBOARD_CORE_TEAMS,
          headerTitleAlign: 'center',
        }}
        listeners={{
          tabPress: () => onTabPress(Routes.APP_DASHBOARD_CORE_TEAMS),
        }}
      />
      <Tabs.Screen
        name="issues"
        options={{
          title: t('tabs.issues'),
          headerShown: false,
          tabBarIcon: ({ color }) => <Folders color={color} />,
          href: Routes.APP_DASHBOARD_CORE_ISSUES,
          headerTitleAlign: 'center',
        }}
        listeners={{
          tabPress: () => onTabPress(Routes.APP_DASHBOARD_CORE_ISSUES),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          title: t('tabs.notification'),
          tabBarIcon: ({ color }) => <Bell color={color} />,
          href: Routes.APP_DASHBOARD_CORE_NOTIFICATION,
          headerTitleAlign: 'center',
        }}
        listeners={{
          tabPress: () => onTabPress(Routes.APP_DASHBOARD_CORE_NOTIFICATION),
        }}
      />
    </Tabs>
  );
};

export default HODLayoutSm;
