import React from 'react';
import { SvgIconProps } from '@/types/icons';

const DeleteIcon = ({
  height = 22,
  width = 16,
  color = '#828285',
  classname = '',
  } : SvgIconProps) => {

  return (
    <svg width={width} height={height} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
      <g clip-path="url(#clip0_52_90)">
      <path d="M3.62143 0.483984L3.42857 0.875H0.857143C0.383036 0.875 0 1.26602 0 1.75C0 2.23398 0.383036 2.625 0.857143 2.625H11.1429C11.617 2.625 12 2.23398 12 1.75C12 1.26602 11.617 0.875 11.1429 0.875H8.57143L8.37857 0.483984C8.23393 0.185938 7.93661 0 7.6125 0H4.3875C4.06339 0 3.76607 0.185938 3.62143 0.483984ZM11.1429 3.5H0.857143L1.425 12.7695C1.46786 13.4613 2.03036 14 2.70804 14H9.29196C9.96964 14 10.5321 13.4613 10.575 12.7695L11.1429 3.5Z" fill={color} />
      </g>
      <defs>
      <clipPath id="clip0_52_90">
      <rect width={width} height={height} fill="white"/>
      </clipPath>
      </defs>
    </svg>

  );
};

export default DeleteIcon;
