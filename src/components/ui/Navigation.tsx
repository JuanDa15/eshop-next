import Link from 'next/link';
import { JSX, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  href?: string;
  className?: string;
  size?: 'sm' | 'b' | 'lg' | 'xl' | '2xl';
}
export const Navigation = ({
  href = '/',
  children,
  className = '',
  size = 'b',
}: Props): JSX.Element => {
  const sizes = {
    sm: 'text-sm',
    b: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };
  return (
    <Link
      href={href}
      className={`transition-all duration-300  text-primary hover:underline hover:text-accent  ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
};
