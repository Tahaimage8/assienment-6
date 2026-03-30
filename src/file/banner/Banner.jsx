import React from "react";
import banner from "../../assets/banner.png";
import playImg from "../../assets/play.png";

const Banner = () => {

return (

<div className="px-6 md:px-16 py-10 md:py-20  max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row items-center justify-between gap-10">



<div className="max-w-xl">

<p className="text-sm bg-purple-100 text-purple-600 inline-block px-4 py-1 rounded-full mb-6">

⭐ New: AI-Powered Tools Available

</p>


<h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">

Supercharge Your <br/>

Digital Workflow

</h1>


<p className="text-gray-500 mb-8">

Access premium AI tools, design assets, templates, and 
productivity software—all in one place.

</p>




<div className="flex flex-col sm:flex-row gap-4">

<button className="btn btn-primary text-white px-6 py-3 rounded-full ">

Explore Products

</button>


<button className="btn btn-soft btn-primary flex items-center justify-center gap-2 border  px-6 py-3 rounded-full">

<img src={playImg} alt="play" className="w-5"/>

Watch Demo

</button>

</div>

</div>



<div>

<img 
src={banner}
alt="banner"
className="w-full md:w-105 rounded-lg"
/>

</div>

</div>

</div>

)

};

export default Banner;