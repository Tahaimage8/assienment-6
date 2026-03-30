import React, { use} from 'react';
import Model from './model';

const Models = ({productPromise, setCarts , carts}) => {
    
    const  models = use(productPromise);

//   console.log(models)
    return (
        <div className='py-20 max-w-7xl mx-auto'>   
<div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
{
     models.map(model=>


  
        <Model key={model.id} model={model} carts={carts} setCarts={setCarts} ></Model>


    )}
</div>

        </div>
    );
};

export default Models;