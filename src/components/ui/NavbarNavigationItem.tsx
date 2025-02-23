'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';
export const NavBarNavigationItem = ({
  href,
  label,
}: {
  href: string;
  label: string;
}): JSX.Element => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      className={`block py-2 px-3 text-primary-text rounded-sm md:bg-transparent md:hover:underline  md:p-0 ${
        isActive ? 'bg-primary text-white md:text-primary' : ''
      }`}
      aria-current='page'
    >
      {label}
    </Link>
  );
};
