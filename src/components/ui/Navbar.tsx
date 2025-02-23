import Image from 'next/image';
import Link from 'next/link';
import { JSX } from 'react';
import { Button } from './Button';
import { IconBars } from '../icons/IconBars';
import { NavBarNavigationItem } from './NavbarNavigationItem';
import { IconSearch } from '../icons/IconSearch';
import { IconCart } from '../icons/IconCart';
import { Badge } from './Badge';
import { ToogleTheme } from './ToogleTheme';

const Links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/category/men',
    label: 'Men',
  },
  {
    href: '/category/women',
    label: 'Women',
  },
  {
    href: '/category/kids',
    label: 'Kids',
  },
];
export default function NavBar(): JSX.Element {
  return (
    <>
      <nav className='bg-secondary-background fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-700'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link
            href={'/'}
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <Image
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8'
              alt='Flowbite Logo'
              width={32}
              height={32}
            />
            <span
              className={`self-center text-2xl font-semibold whitespace-nowrap dark:text-white`}
            >
              eShop
            </span>
          </Link>
          <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2'>
            <Button type='button' severity='icon'>
              <IconSearch />
            </Button>
            <Button type='button' severity='icon'>
              <Badge className='bg-primary'>
                <IconCart />
              </Badge>
            </Button>
            <ToogleTheme />
            <Button
              severity='plain'
              data-collapse-toggle='navbar-sticky'
              type='button'
              className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-secondary-text rounded-lg md:hidden transition-all duration-300 hover:backdrop-brightness-125'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <IconBars />
            </Button>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-sticky'
          >
            <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-boder-color rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-primary-background md:bg-transparent'>
              {Links.map(({ href, label }) => (
                <li key={label}>
                  <NavBarNavigationItem href={href} label={label} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
