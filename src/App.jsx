
import { Suspense } from 'react'
import './App.css'
import Banner from './file/banner/Banner'
import Navbar from './file/nav/Navbar'
import Star from './file/star section/Star'
import Step from './file/step section/step'
const stepPromise = fetch("/step.json").then(res => res.json());
function App() {


  return (
    < >
<div className=''>


   <Navbar></Navbar>
  <Banner></Banner>
  <Star></Star>

    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Step stepPromise={stepPromise} />
    </Suspense>

</div>
    </>
  )
}

export default App
