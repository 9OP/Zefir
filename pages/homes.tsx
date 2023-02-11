import type { NextPage } from 'next';
import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';
import { AnimatedLoader } from '../components/AnimatedLoader';
import { useEffect, useState } from 'react';
import { fetchHomes } from '../lib/http';

const Homes: NextPage = () => {
  // Should use a hook for data fetching instead of fetching in useEffect
  // const { data: homes, isLoading } = useHomes();
  const [isLoading, setLoading] = useState(false);
  const [homes, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    const getHomes = async () => {
      setLoading(true);
      const homes = await fetchHomes();
      console.log(homes);
      setHomes(homes);
      setLoading(false);
    };

    getHomes();
  }, []);

  if (isLoading) return <AnimatedLoader />;
  if (!homes) return <p>No home to show, please reload the page!</p>;

  return (
    <Layout>
      <HomeList homes={homes} />
    </Layout>
  );
};

export default Homes;
