import type { NextPage } from 'next';
import { getRandomHomes } from '../business/getRandomHomes';

import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';

export async function getStaticProps() {
  const homes = await getRandomHomes();

  return {
    props: {
      homes,
    },
  };
}

interface Props {
  homes: Home[];
}

const Index: NextPage<Props> = ({ homes }: Props) => {
  return (
    <Layout>
      <HomeList homes={homes} />
    </Layout>
  );
};

export default Index;
