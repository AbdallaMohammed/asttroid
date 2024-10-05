import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const FilterIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.25 12H8.895m-4.361 0H2.75m1.784 0a2.18 2.18 0 114.36 0 2.18 2.18 0 01-4.36 0zm16.716 6.607h-5.748m0 0a2.182 2.182 0 01-3.723 1.541 2.18 2.18 0 01-.638-1.541m4.361 0a2.18 2.18 0 00-4.361 0m0 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m11.034 0a2.18 2.18 0 114.36 0 2.18 2.18 0 01-4.36 0z"
      stroke={color}
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </Svg>
);
