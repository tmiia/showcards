import React from 'react';
import { SvgIconProps } from '@/types/icons';

const CardIcon = ({
  height = 15,
  width = 16,
  color = '#3448C6',
  classname = '',
  } : SvgIconProps) => {

  return (
    <svg width={width} height={height} viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname} >
      <path d="M7 3C7 2.44772 7.44772 2 8 2H14C14.5523 2 15 2.44772 15 3V13C15 13.5523 14.5523 14 14 14H8C7.44772 14 7 13.5523 7 13V3Z" fill={color}/>
      <path d="M0.185644 2.65341C0.0831155 2.11072 0.439933 1.58768 0.982617 1.48515L7.86094 0.185642C8.40362 0.0831139 8.92667 0.439931 9.0292 0.982616L11.0713 11.7914C11.1738 12.3341 10.817 12.8571 10.2743 12.9597L3.39599 14.2592C2.8533 14.3617 2.33025 14.0049 2.22772 13.4622L0.185644 2.65341Z" fill={color} />
    </svg>
  );
};

export default CardIcon;
