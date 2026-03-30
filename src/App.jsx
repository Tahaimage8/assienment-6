
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './file/banner/Banner'
import Navbar from './file/nav/Navbar'
import Star from './file/star section/Star'
import Step from './file/step section/step'
import Pricing from './file/pricingsection/Pricing'
import Workflow from './file/workflow/Workflow'
import Footer from './file/footer/footer'
import Models from './file/main/Models'
import Cart from './file/main/Cart'
const stepPromise = fetch("/step.json").then(res => res.json());


function App() {
  
  const getModels = async () => {
    const res = await fetch('/models.json')
    return res.json();
  }
  const productPromise = getModels();
  
  const [activeTab, setActiveTab] = useState('model');
  const [carts, setCarts] = useState([])
  return (
    < >
<div className=''>


   <Navbar carts={carts}></Navbar>
  <Banner></Banner>
  <Star></Star>
  <div className='text-center mt-20 mb-15'>
    <h2 className='text-5xl font-extrabold '>Premium Digital Tools</h2>
    <p className='text-xl text-[#627382]'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
  </div>
  <div className="tabs tabs-box  justify-center bg-transparent ">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label="Products" defaultChecked onClick={()=> setActiveTab("model")} />
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-30" aria-label={`Cart ${carts.length > 0 ? carts.length : ""}`} onClick={()=> setActiveTab('cart')} />
</div>
<Suspense fallback={<div className="flex justify-center items-center h-screen">
  <span className="loading loading-spinner loading-lg"></span>
</div>}>
     {activeTab==="model"?<Models productPromise={productPromise} carts={carts} setCarts={setCarts} ></Models> : null}


  { activeTab==="cart"&&  <Cart carts={carts} setCarts={setCarts}></Cart>}

</Suspense>
    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Step stepPromise={stepPromise} />
    </Suspense>
    <Pricing></Pricing>
    <Workflow></Workflow>
    <Footer></Footer>

</div>
    </>
  )
}

export default App
