import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const StyleIcon = ({ color, ...props }: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.02 7.823c-.52.947-.52 2.092-.52 4.38v1.522c0 3.9 0 5.851 1.172 7.063C4.844 22 6.729 22 10.5 22h4c3.771 0 5.657 0 6.828-1.212 1.171-1.212 1.172-3.162 1.172-7.063v-1.521c0-2.289 0-3.433-.52-4.381-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.611 2.622 13.608 2 12.5 2c-1.108 0-2.11.622-4.116 1.867l-2 1.241C4.487 6.286 3.539 6.874 3.02 7.823zM11.75 18a.75.75 0 101.5 0v-3a.75.75 0 10-1.5 0v3z"
      fill={color}
    />
  </Svg>
);
