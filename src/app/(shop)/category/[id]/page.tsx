import { notFound } from 'next/navigation';
import { JSX } from 'react';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CategoryPage({
  params,
}: Props): Promise<JSX.Element> {
  const { id } = await params;

  return <>Hello CategoryPage</>;
}
