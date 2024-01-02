// Card.js
import { Swiggy_Image } from '../Constant';

const Card = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <div className="m-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
      <label className='absolute bg-black text-white'>Promoted</label>
      <img
        className="w-full h-32 object-cover mb-4 rounded-md transition-transform transform hover:scale-105"
        src={`${Swiggy_Image}${cloudinaryImageId}`}
        alt={name}
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <h4 className="text-gray-600 mb-2">
        {cuisines ? cuisines.join(', ') : 'No cuisines available'}
      </h4>
      <h4 className="text-yellow-500">{avgRating}</h4>
    </div>
  );
};

export default Card;
