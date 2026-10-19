import type { TechType } from "../Type";

export interface CardProps {
  tech: TechType;
  addTech: (tech: TechType) => void;
  isAdded: boolean;
}

const Card = ({
  tech,
  addTech,
  isAdded,
}: CardProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-lg transition">
      <div className="flex justify-between items-start">
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-10 h-10 object-contain"
        />

        <span className="text-xs bg-orange-100 text-orange-500 px-3 py-1 rounded-full">
          {tech.badge}
        </span>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mt-4">
        {tech.name}
      </h2>

      <p className="text-gray-500 mt-3 min-h-[72px]">
        {tech.description}
      </p>

      <div className="flex justify-between items-center mt-5">
        <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded text-sm">
          {tech.category}
        </span>

        <span className="text-gray-500 text-sm">
          {tech.level}
        </span>

        <span className="text-sm">
          ⭐ {tech.rating}
        </span>
      </div>

      <button
        onClick={() => addTech(tech)}
        disabled={isAdded}
        className={`w-full py-3 rounded-lg mt-5 text-white ${
          isAdded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-slate-950 hover:bg-slate-800 cursor-pointer"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default Card;