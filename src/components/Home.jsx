import React from 'react';
import Lottie from "lottie-react";
import car from "../../public/car.json"

const Home = () => {
    return (
        <div className='lg:flex justify-center flex-row lg:flex-row-reverse gap-4 mx-10 py-8'>
            <Lottie animationData={car} className='lg:w-full lg:max-h-[500px] rounded'></Lottie>
            <div className='shadow-2xl'>
                <h1 className='text-4xl font-bold text-center'>পরিচিতি</h1>
                <ul className='text-lg font-semibold list-decimal list-inside lg:mx-10 my-6 mx-3'>
                    <li>Group Name: রুকইয়াহ সাপোর্ট গ্রুপ – Ruqyah Support BD</li>
                    <li>old name: রুকইয়া শারইয়্যাহ সাপোর্ট – Ruqyah Shariyah Support</li>
                    <li>Core Organization: Ruqyah Support BD (রুকইয়াহ সাপোর্ট বিডি)</li>
                    <li>Date of Establishment: 18 Sept 2017, 23:29.</li>
                    <li>Slogan: Revival of a sunnah… (একটি সুন্নাহর পুনর্জাগরন…)</li>
                    <li>Tagline: রুকইয়াহ, জিন, বদনজর, কালো যাদু, ব্ল্যাক ম্যাজিক, তাবিজ, বান মারা, বশ করা, জিন ধরা, রুকইয়াহ শারইয়্যাহ।</li>
                    <li>Type: সম্পূর্ণ অলাভজনক দাওয়াতি প্রতিষ্ঠান</li>
                    <li>Allowed Language: Bangla, English, Urdu, Hindi and Arabic.</li>
                    <li>Allowed Religion: Islam & Any Religion (including Hinduism, Christianity, Judaism etc.)</li>

                </ul>
                
            </div>
            
        </div>
    );
};

export default Home;