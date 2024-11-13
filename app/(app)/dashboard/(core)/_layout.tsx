import { Href, router } from 'expo-router';
import { Button, useMedia } from 'tamagui';
import { Power } from '@tamagui/lucide-icons';
import HODLayoutLg from 'components/HODLayoutLg';
import HODLayoutSm from 'components/HODLayoutSm';

export default function DashboardLayout() {
  const media = useMedia();

  const renderLogout = () => (
    <Button
      icon={Power}
      mr="$4"
      onPress={async () => {
        console.log('logout BTN Press');
      }}
    />
  );

  const onTabPress = (path: Href<string>) => {
    router.navigate(path);
  };

  if (media.gtSm) {
    return <HODLayoutLg logout={renderLogout} onTabPress={onTabPress} />;
  }

  return <HODLayoutSm logout={renderLogout} onTabPress={onTabPress} />;
}
