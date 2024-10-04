import React from 'react';
import { Button, Text, XStack, YStack } from 'tamagui';
import { Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {
  FilePlus,
  Folders,
  LogIn,
  ScanLine,
  Share2,
} from '@tamagui/lucide-icons';
import { MobileContainer } from 'components/shared/MobileContainer';

import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation('app');

  const openPicker = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert(t('permissionAlert'));
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'All',
      aspect: [4, 3],
      quality: 0.8,
      allowsMultipleSelection: true,
      base64: false,
      selectionLimit: 5,
    });

    if (!result.canceled) {
      console.log('result.assets: ', result.assets);
    }
  };

  return (
    <MobileContainer safeArea>
      <YStack gap="$4">
        <XStack gap="$4">
          <Button
            onPress={() => {}}
            alignSelf="center"
            br="$4"
            f={1}
            size="$12">
            <XStack gap="$4" ai="center" jc="center">
              <ScanLine size="$4" />
              <YStack gap="$2" ai="center">
                <Text fontSize="$6">{t('scanQr')}</Text>
                <Text>{t('ScanQrIssues')}</Text>
              </YStack>
            </XStack>
          </Button>
        </XStack>

        <XStack gap="$4">
          <Button onPress={() => {}} f={1} h="$12">
            <YStack gap="$2" ai="center">
              <FilePlus size="$4" />
              <Text fontSize="$6">{t('raiseIssue')}</Text>
            </YStack>
          </Button>
          <Button onPress={() => {}} f={1} h="$12">
            <YStack gap="$2" ai="center">
              <Folders size="$4" />
              <Text fontSize="$6">{t('viewIssues')}</Text>
            </YStack>
          </Button>
        </XStack>
      </YStack>

      <YStack gap="$4" f={1} justifyContent="flex-end">
        <XStack>
          <Button onPress={() => {}} f={1} size="$8">
            <XStack gap="$2" ai="center" f={1}>
              <LogIn size="$4" />
              <Text fontSize="$8">{t('login')}</Text>
            </XStack>
          </Button>
        </XStack>
        <XStack>
          <Button
            f={1}
            size="$8"
            onPress={() => {
              openPicker();
            }}>
            <XStack gap="$2" ai="center" f={1}>
              <Share2 size="$4" />
              <Text fontSize="$8">{t('mediaPickerObjectConsole')}</Text>
            </XStack>
          </Button>
        </XStack>
      </YStack>   q
    </MobileContainer>
  );
};

export default App;
