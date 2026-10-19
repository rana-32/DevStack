import { use } from "react";
import Card from "../Card/Card";
import type { TechType } from "../Type";

export interface TechProps {
  TechPromise: Promise<TechType[]>;
  addTech: (tech: TechType) => void;
  selectedTech: TechType[];
}

const Tech = ({
  TechPromise,
  addTech,
  selectedTech,
}: TechProps) => {
  const techs = use(TechPromise);

  return (
    <div className="grid grid-cols-3 gap-5">
      {techs.map((tech) => {
        const isAdded = selectedTech.some(
          (item) => item.id === tech.id
        );

        return (
          <Card
            key={tech.id}
            tech={tech}
            addTech={addTech}
            isAdded={isAdded}
          />
        );
      })}
    </div>
  );
};

export default Tech;