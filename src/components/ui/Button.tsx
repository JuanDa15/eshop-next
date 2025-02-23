import React, { HTMLAttributes, JSX } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  children: string | JSX.Element | JSX.Element[] | React.ReactNode;
  severity:
    | 'primary'
    | 'secondary'
    | 'cancel'
    | 'danger'
    | 'link'
    | 'plain'
    | 'icon';
}

export const Button = ({
  children,
  className: customClass = '',
  type: buttonType = 'button',
  severity = 'primary',
  ...props
}: Props) => {
  const defaultClass = 'px-4 py-2 text-center transition-all duration-300 ';
  const backgroundClass = {
    primary:
      defaultClass +
      'bg-primary text-white text-gray-800 hover:brightness-125 active:brightness-75 dark:hover:brightness-110 dark:active:brightness-75',
    secondary:
      defaultClass +
      'bg-secondary text-primary hover:brightness-110 dark:hover:brightness-125 active:brightness-90 dark:active:brightness-105',
    cancel:
      defaultClass +
      'bg-secondary-background text-secondary-text border border-boder-color hover:brightness-105 dark:hover:brightness-125 active:brightness-90 dark:active:brightness-105',
    danger:
      defaultClass +
      'bg-red-600 text-white hover:brightness-110 dark:hover:brightness-110 active:brightness-90 dark:active:brightness-75',
    link:
      defaultClass +
      'text-primary-text hover:underline hover:text-primary active:backdrop-brightness-125',
    plain: 'bg-transparent text-primary-text',
    icon: 'bg-transparent text-primary-text p-2 rounded-full hover:backdrop-brightness-125 active:backdrop-brightness-100',
  };

  return (
    <button
      type={buttonType}
      className={`${backgroundClass[severity]} focus:ring-1 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm ${customClass}`}
      {...props}
    >
      {children}
    </button>
  );
};
