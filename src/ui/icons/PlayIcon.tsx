import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const PlayIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M3.333 14V2A.668.668 0 014.38 1.45l8.667 6c.36.249.36.848 0 1.097l-8.667 6A.666.666 0 013.333 14z"
      fill={color}
    />
  </Svg>
);
