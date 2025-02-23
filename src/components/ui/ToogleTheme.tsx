'use client';
import { JSX, useState } from 'react';
import { Button } from './Button';
import { IconSun } from '../icons/IconSun';
import { IconMoon } from '../icons/IconMoon';

const colors: Record<'dark' | 'light', Record<string, string>> = {
  dark: {
    background: '#202124',
    text: '#e8eaed',
    secondaryBackground: '#303134',
    secondaryText: '#bdc1c6',
    primary: '#1a73e8',
    secondary: '#5f6368',
    accent: '#34a853',
    border: '#5f6368',
  },
  light: {
    background: '#ffffff',
    text: '#202124',
    secondaryBackground: '#f1f3f4',
    secondaryText: '#5f6368',
    primary: '#1a73e8',
    secondary: '#e8f0fe',
    accent: '#34a853',
    border: '#dadce0',
  },
};

const variableNames: Record<string, string> = {
  background: '--background-color',
  text: '--text-color',
  secondaryBackground: '--secondary-background-color',
  secondaryText: '--secondary-text-color',
  primary: '--primary-color',
  secondary: '--secondary-color',
  accent: '--accent-color',
  border: '--border-color',
};

const getCurrentTheme = () =>
  window?.matchMedia &&
  window?.matchMedia('(prefers-color-scheme: dark)')?.matches
    ? 'dark'
    : 'light';

export const ToogleTheme = (): JSX.Element => {
  const [theme, setTheme] = useState<'light' | 'dark'>(getCurrentTheme());

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);

    Object.keys(variableNames).forEach((variable) => {
      document.documentElement.style.setProperty(
        variableNames[variable],
        colors[newTheme][variable]
      );
    });
  };

  return (
    <Button type='button' severity='icon' onClick={handleThemeChange}>
      {theme === 'light' ? <IconMoon /> : <IconSun />}
    </Button>
  );
};
