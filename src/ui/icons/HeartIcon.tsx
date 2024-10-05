import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const HeartIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M2.5 9.137C2.5 14 6.52 16.59 9.462 18.91 10.5 19.729 11.5 20.5 12.5 20.5s2-.77 3.038-1.59C18.481 16.592 22.5 14 22.5 9.138S17 .825 12.5 5.5C8 .825 2.5 4.274 2.5 9.137z"
      fill={color}
    />
  </Svg>
);
