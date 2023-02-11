import { useState } from 'react';
import { HomeCard } from './HomeCard';
import { HomeModal } from './HomeModal';
import { Modal } from './Modal';

export const HomeList = ({ homes }: { homes: Home[] }) => {
  const [isVisible, setVisible] = useState(false);
  const [home, setHome] = useState<Home>();

  const onClose = () => setVisible(false);
  const onOpen = (home: Home) => {
    setVisible(true);
    setHome(home);
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
        {homes.map((home) => (
          <div key={home.id} onClick={() => onOpen(home)}>
            <HomeCard {...home} />
          </div>
        ))}
      </div>
      <Modal onClose={onClose} isVisible={isVisible}>
        {home && <HomeModal {...home} />}
      </Modal>
    </>
  );
};
