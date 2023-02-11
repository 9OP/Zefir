import { formatPrice } from '../lib/format';

export const HomeModal = (home: Home) => (
  <div className="w-full p-4 mb-1 overflow-hidden">
    <img className="w-full bg-cover" src={home.picture} alt="home picture" />
    <div className="pb-2">
      <div className="pt-2">
        <i className="cursor-pointer far fa-heart"></i>
        <span className="text-sm font-medium text-gray-400">{home.owner}</span>
      </div>

      <div className="pt-1 overflow-auto max-h-44">
        <div className="mb-2 text-sm">
          <span className="mr-2 font-medium">Address:</span> {home.address}
        </div>
        <div className="mb-2 text-sm">
          <span className="mr-2 font-medium">Price:</span>
          {formatPrice(home.price, home.currency)}
        </div>
        <div className="mb-2 text-sm">
          <span className="mr-2 font-medium">Surface:</span> {home.surface}m²
        </div>
        <div className="mb-2 text-sm">
          <span className="mr-2 font-medium">Year:</span> {home.year || 'NA'}
        </div>
        <div className="mb-2 text-sm">
          <span className="mr-2 font-medium">Floors:</span>
          {home.floors || 'NA'}
        </div>
        <div className="mb-2 text-sm">
          <span className="mr-2 font-medium">Rooms:</span> {home.rooms}
        </div>
      </div>
    </div>
  </div>
);
