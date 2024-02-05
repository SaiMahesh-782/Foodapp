
import pizzaImage from "../utils/pizza.jpg"

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="text-center mt-16">
        {/* Ternary condition to Show or Hide profile with nested routing */}
      </div>
      <div className="flex flex-wrap justify-around items-center mt-10">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold leading-tight text-gray-800">
            Welcome to <br /> The world of <br />
            <span className="bg-orange-500 px-4 py-2 rounded-full text-white">Tasty & Fresh Food</span>
          </h1>
          <h4 className="text-xl mt-4 italic text-gray-800">
            "Better you will feel if you eat a <span className="text-orange-500">Crazy Food</span> healthy meal"
          </h4>
        </div>
        <div className="mt-10">
          <img src={pizzaImage} alt="" className="w-96 h-96 rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
