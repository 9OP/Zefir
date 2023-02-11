import type { NextPage } from 'next';
import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';
import { AnimatedLoader } from '../components/AnimatedLoader';
import { useHomes } from '../lib/hooks';

const Homes: NextPage = () => {
  const { data: homes, isLoading } = useHomes();

  if (isLoading) return <AnimatedLoader />;
  if (!homes) return <p>No home to show, please reload the page!</p>;

  return (
    <Layout>
      <HomeList homes={homes} />
    </Layout>
  );
};

export default Homes;
