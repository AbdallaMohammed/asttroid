import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const UserIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 7a4 4 0 118 0 4 4 0 01-8 0zm0 6a5 5 0 00-5 5 3 3 0 003 3h12a3 3 0 003-3 5 5 0 00-5-5h-8z"
      fill={color}
    />
  </Svg>
);
