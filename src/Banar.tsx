
import heroimage from "./assets/banner-stack.png";
const Banar = () => {
  return (
    <div className="max-w-7xl mx-auto">
          <div className="flex mt-36 ">
      <div className="w-1/2">
        <h1 className="text-6xl font-bold">
          Build Your Ideal
          <br />
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>
        <p className="text-gray-500 text-lg mt-6 max-w-xl">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>
         <div className="flex gap-2 mt-8">
          <button className="bg-linear-to-r from-orange-500 to-pink-500 text-white p-3 rounded-lg font-semibold">
            Explore Technologies
          </button>
          <button className="border border-gray-300 px-8 py-3 rounded-lg text-gray-600">
            Learn More
          </button>
        </div>
      </div>
    
        <div className="w-1/2 flex justify-center">
          <img src={heroimage} alt="" className="w-[400px]" />
        </div>
     
    </div>
    </div>
  
  );
};

export default Banar;