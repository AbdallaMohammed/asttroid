import type { SvgProps as DefaultSvgProps } from 'react-native-svg';

declare module '@env' {
  export const API_URL: string;
}

declare module 'react-native-svg' {
  interface SvgProps extends DefaultSvgProps {
    className?: string;
  }
}
