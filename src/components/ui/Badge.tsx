import { JSX, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'custom';
}
export const Badge = ({
  children,
  position = 'top-right',
  className = ' bg-red-500',
}: Props): JSX.Element => {
  const positions = {
    'top-right': '-top-3 -end-3 ',
    'top-left': '-top-3 -start-3 ',
    'bottom-right': '-bottom-3 -end-3 ',
    'bottom-left': '-bottom-3 -start-3 ',
    custom: '',
  };
  return (
    <div className='relative inline-block'>
      {children}
      <div
        className={`absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold  border-2 border-white rounded-full text-white dark:border-gray-900 ${positions[position]} ${className}`}
      >
        20
      </div>
    </div>
  );
};
