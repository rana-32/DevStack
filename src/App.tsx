
import { Suspense } from 'react'
import './App.css'
import Nav from './Nav'
import type { TechType } from './Type';

const getTech = async (): Promise<TechType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {


  return (
   <>
   <Nav></Nav>

   <Suspense>
    <Tech ></Tech>
   </Suspense>

   </>
  )
}

export default App
