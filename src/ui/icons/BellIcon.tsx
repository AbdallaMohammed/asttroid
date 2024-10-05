import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Circle, Path } from 'react-native-svg';

export const BellIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 2a7 7 0 012.263.374 4.5 4.5 0 004.5 7.447L19 9.743v2.784c0 .116.02.231.06.34l.046.107 1.716 3.433a1.1 1.1 0 01-.869 1.586l-.115.006H4.162a1.1 1.1 0 01-1.03-1.487l.046-.105 1.717-3.433a1 1 0 00.098-.331L5 12.528V9a7 7 0 017-7zm5.5 1a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM12 21a3 3 0 01-2.83-2h5.66A3 3 0 0112 21z"
      fill={color}
    />
    <Circle cx={17.5} cy={5.5} r={2.5} fill="#9D1416" />
  </Svg>
);
