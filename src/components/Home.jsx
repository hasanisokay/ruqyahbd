import React from 'react';
import Lottie from "lottie-react";
import car from "../../public/car.json"

const Home = () => {
    return (
        <div className='lg:flex justify-center flex-row lg:flex-row-reverse gap-4 mx-10 py-8 min-h-[calc(100vh-80px)]'>
            <Lottie animationData={car} className='lg:w-full lg:h-full h-96 rounded'></Lottie>
            <div>
                <h1 className='text-xl font-bold'>This page will be updated soon. Stay connected...</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, fugiat! Amet repudiandae molestias nostrum earum quidem consectetur quasi repellat aperiam minus obcaecati et, tempore voluptatibus, ducimus ipsa ut veniam esse saepe atque optio voluptate quibusdam adipisci? Sed, voluptate ipsam neque sequi iste illum. Quae eum minus aperiam voluptatum numquam magni, placeat mollitia fuga, corporis dolorum totam asperiores aliquam accusantium illo! Eveniet repellat ab officiis adipisci ut, similique a atque porro ex. Neque repellat tempore illo a maiores!</p>
            </div>
            
        </div>
    );
};

export default Home;