import { useColorScheme } from 'react-native';
import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui';
import { config } from '../tamagui.config';
import { I18nextProvider } from 'react-i18next';
import i18next from '../lib/i18n/i18n';

export function TamagUIProvider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, 'config'>) {
  const colorScheme = useColorScheme();

  return (
    <I18nextProvider i18n={i18next}>
      <TamaguiProvider
        config={config}
        defaultTheme={colorScheme === 'dark' ? 'dark' : 'light'}
        {...rest}>
          {children}
      </TamaguiProvider>
    </I18nextProvider>
  );
}
