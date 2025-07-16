import React from 'react';
import { SvgIconProps } from '@/types/icons';

const PlusIcon = ({
  height = 22,
  width = 16,
  color = '#9CA3D2',
  classname = '',
  } : SvgIconProps) => {

  return (
    <svg width={width} height={height} viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
      <path d="M18.3214 11C18.3214 11.7601 17.7137 12.3754 16.9643 12.3754H10.8571V18.5629C10.8571 19.323 10.2494 19.9375 9.5 19.9375C8.7506 19.9375 8.14286 19.323 8.14286 18.5629V12.3754H2.03572C1.28632 12.3754 0.678574 11.7601 0.678574 11C0.678574 10.2399 1.28632 9.62543 2.03572 9.62543H8.14286V3.43793C8.14286 2.67781 8.7506 2.0625 9.5 2.0625C10.2494 2.0625 10.8571 2.67781 10.8571 3.43793V9.62543H16.9643C17.715 9.625 18.3214 10.2395 18.3214 11Z" fill={color}/>
    </svg>
  );
};

export default PlusIcon;
