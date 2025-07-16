import React from 'react';
import { SvgIconProps } from '@/types/icons';

const PlayIcon = ({
  height = 22,
  width = 16,
  color = '#3448C6',
  classname = '',
  } : SvgIconProps) => {

  return (
    <svg width={width} height={height} viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
      <path d="M3.04167 1.67576C2.425 1.28474 1.65 1.27185 1.02083 1.63708C0.391667 2.00232 0 2.68982 0 3.43748V18.5625C0 19.3101 0.391667 19.9976 1.02083 20.3629C1.65 20.7281 2.425 20.7109 3.04167 20.3242L15.0417 12.7617C15.6375 12.3879 16 11.7218 16 11C16 10.2781 15.6375 9.61638 15.0417 9.23826L3.04167 1.67576Z" fill={color}/>
    </svg>
  );
};

export default PlayIcon;
