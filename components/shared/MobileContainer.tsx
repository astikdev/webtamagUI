import { AdjustedDeviceWidth } from 'constants/Device';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StackProps, View, useMedia } from 'tamagui';

export const MobileContainer: React.FC<
  { children: React.ReactNode; safeArea?: boolean } & StackProps
> = ({ children, safeArea, ...rest }) => {
  const { top, bottom } = useSafeAreaInsets();
  const media = useMedia();
  const isDesktopWeb = media.gtSm;
  return (
    <View f={1} pt={safeArea && top} pb={safeArea && bottom}>
      <View
        f={1}
        w={isDesktopWeb ? AdjustedDeviceWidth : undefined}
        ml={isDesktopWeb ? 'auto' : undefined}
        mr={isDesktopWeb ? 'auto' : undefined}
        p="$4"
        {...rest}>
        {children}
      </View>
    </View>
  );
};
