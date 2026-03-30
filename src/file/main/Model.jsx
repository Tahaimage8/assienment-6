import React,{ useState } from 'react';
import { toast } from 'react-toastify';
const Model = ({model,setCarts,carts }) => {
    
  const[isBuy , SetIsBuy] = useState(false);

    const handleBuy = () => {
        SetIsBuy(true)
        const isFound = carts.find(item=> item.id=== model.id);
        if(isFound){
            toast.warn(`You have already subscribed to ${model.name}`);
            return
        }
        setCarts([...carts,model])
        toast.success(`Item Added ${model.name}`)
        


    }

    return (
        <div>
              <div className='shadow-lg rounded-lg border-zinc-300  overflow-hidden relative'>





        <div className='p-4 space-y-5'>
        <div className='flex justify-center items-center h-15 w-15 bg-white group'>
            <img className='h-25 w-25 object-contain transition-transform group-hover:scale-110 duration-500'  src={model.icon} alt="img" />
        </div>
            <div
  className={`absolute top-4 right-4 px-4 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wider text-white ${
    model.tag === "popular" ? "bg-red-500" : model.tag === "best seller" ? "bg-orange-500" : model.tag === "new" ? "bg-amber-500"
      : "bg-gray-500"
  }`}
>
  🔥 {model.tag}
            </div>
            <h2 className='text-2xl font-bold'>{model.name}</h2>
            <p>{model.description}</p>
  
            <div className='text-2xl font-bold'>${model.price}/mouth</div>
            <div >
                {
                    model.features.map(feature=>{
                        return <p key={feature} className='flex items-center gap-2'><span className='text-green-500 text-lg'>✓</span>{feature}</p>
                    })

                }
            </div>
            <button className=' w-full btn btn-outline btn-success text-black mt-5'
                onClick={handleBuy}
            >
            {isBuy ? "Buyed" : "buy Now"}
            </button>
        </div>

    </div>
        </div>
    
    );
};

export default Model;