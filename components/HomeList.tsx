import { useState, useMemo } from 'react';
import { HomeCard } from './HomeCard';
import { HomeModal } from './HomeModal';
import { Modal } from './Modal';

export const HomeList = ({ homes }: { homes: Home[] }) => {
  const [isVisible, setVisible] = useState(false);
  const [home, setHome] = useState<Home>();
  const [address, setAddress] = useState('');

  const onClose = () => setVisible(false);
  const onOpen = (home: Home) => {
    setVisible(true);
    setHome(home);
  };

  const filteredHomes = useMemo(() => {
    return homes.filter((home) => home.address.toLowerCase().includes(address));
  }, [address, homes]);

  return (
    <>
      <div>
        <label htmlFor="address-search" className="mt-2 mb-2 text-md">
          Address
        </label>
        <input
          type="text"
          id="address-search"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
          placeholder="Search..."
        />
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
        {filteredHomes.map((home) => (
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
