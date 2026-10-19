import { Suspense, useState } from "react";
import "./App.css";
import Banar from "./Banar";
import Tech from "./component/Tech";
import Nav from "./Nav";
import YourStack from "./component/YourStack";
import type { TechType } from "./Type";
import Footer from "./Footer";

const getTech = async (): Promise<TechType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const techPromise = getTech();

function App() {
  const [selectedTech, setSelectedTech] = useState<TechType[]>([]);

  const addTech = (tech: TechType) => {
    const alreadyAdded = selectedTech.find(
      (item) => item.id === tech.id
    );

    if (!alreadyAdded) {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const removeTech = (id: number) => {
    const remainingTech = selectedTech.filter(
      (item) => item.id !== id
    );

    setSelectedTech(remainingTech);
  };

  const removeAll = () => {
    setSelectedTech([]);
  };

  return (
    <>
      <Nav />
      <Banar />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold flex gap-2">
          Explore the
          <span className="text-[#BD1795]">Technology</span>
        </h1>

        <p className="text-gray-500 py-1.5">
          Pick one Technology per category to build your ideal stack
        </p>

        <div className="flex gap-6 mt-8 items-start">
          <div className="w-3/4">
            <Suspense fallback={<h1>Loading...</h1>}>
              <Tech
                TechPromise={techPromise}
                addTech={addTech}
                selectedTech={selectedTech}
              />
            </Suspense>
          </div>

          <div className="w-1/4">
            <YourStack
              selectedTech={selectedTech}
              removeTech={removeTech}
              removeAll={removeAll}
            />
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>
  );
}

export default App;