import english from 'lib/i18n/en';
import { Language } from '../api';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNs: 'en';
    resources: typeof english;
  }
}
