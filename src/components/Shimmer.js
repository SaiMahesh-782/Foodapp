const Shimmer = () => {
    // Create an array with a length of 12 for generating 12 cards
    const cardArray = Array.from({ length: 12 }, (_, index) => index);
  
    return (
      <>
        {cardArray.map((cardIndex) => (
          <div key={cardIndex} className="m-4 p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
            <img
              className="w-full h-32 object-cover mb-4 rounded-md transition-transform transform hover:scale-105"
              alt={`Card ${cardIndex + 1}`}
            />
            <h3 className="text-xl font-semibold mb-2">" "</h3>
            <h4 className="text-gray-600 mb-2">" "</h4>
            <h4 className="text-yellow-500">" "</h4>
          </div>
        ))}
      </>
    );
  };
  
  export default Shimmer;
  