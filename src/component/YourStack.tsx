import type { TechType } from "../Type";

export interface YourStackProps {
  selectedTech: TechType[];
  removeTech: (id: number) => void;
  removeAll: () => void;
}

const YourStack = ({
  selectedTech,
  removeTech,
  removeAll,
}: YourStackProps) => {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
      <h2 className="text-xl font-bold text-gray-800">
        Your Stack
      </h2>

      <p className="text-gray-400 text-sm mb-5">
        {selectedTech.length} Technology Selected
      </p>

      <div className="flex flex-col gap-3">
        {selectedTech.map((tech) => (
          <div
            key={tech.id}
            className="flex justify-between items-center border border-gray-200 rounded-lg p-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-8 h-8 object-contain"
              />

              <div>
                <h3 className="font-semibold">
                  {tech.name}
                </h3>

                <p className="text-xs text-gray-400">
                  {tech.category}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeTech(tech.id)}
              className="text-gray-400 text-xl cursor-pointer hover:text-red-500"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={removeAll}
        className="w-full border border-red-400 text-red-500 py-2 rounded-lg mt-6 cursor-pointer hover:bg-red-50"
      >
        Remove All
      </button>
    </div>
  );
};

export default YourStack;