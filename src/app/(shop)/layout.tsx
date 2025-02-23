import NavBar from '@/components/ui/Navbar';
import { JSX, PropsWithChildren } from 'react';
export default function ShopLayout({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <div className='flex flex-col pt-20 min-h-lvh'>
      <NavBar />
      <div className='max-w-screen-xl mx-auto p-2 min-h-[calc(100vh-5rem)]'>
        {children}
      </div>
    </div>
  );
}
