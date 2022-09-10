import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return {
    title: 'Jonny Food',
    description: 'A collection of personal recipes',
  };
};

export default function Index() {
  return <span>test</span>;
}
