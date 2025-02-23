import { Illustration404 } from '@/components/illustrations/404';
import { Navigation } from '@/components/ui/Navigation';
import { paragraph_font } from '@/config/font';
import { JSX } from 'react';
export default function NotFoundCategory(): JSX.Element {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Illustration404 className='transition-all text-primary my-6 rounded-md w-[350px] md:w-[550px] lg:w-[750px]' />

      <p
        className={`text-lg my-6  text-secondary-text text-center
           ${paragraph_font.className}`}
      >
        Sorry, the category you are looking for does not exist.
      </p>
      <Navigation href='/' size='2xl' className='mt-4'>
        Go back
      </Navigation>
    </div>
  );
}
