import { HomeCard } from './HomeCard';

export const HomeList = ({ homes }: { homes: Home[] }) => (
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
    {homes.map((home) => (
      <HomeCard key={home.id} {...home} />
    ))}
  </div>
);
