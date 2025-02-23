import { JSX } from 'react';
export const IconBars = ({ color = 'currentColor' }): JSX.Element => {
  return (
    <svg className='w-5 h-5' aria-hidden='true' fill='none' viewBox='0 0 17 14'>
      <path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M1 1h15M1 7h15M1 13h15'
      />
    </svg>
  );
};
