import React, { useEffect } from 'react';
import { AiOutlineFileDone } from 'react-icons/ai';
import AOS from 'aos';


const ProductFeatures = ({ product }) => {
    // initialize aos plugin
    useEffect(() => {
        AOS.init();
    }, []);
    const { features } = product;
    return (
        <div className='mt-10 flex flex-wrap justify-between font-my-title tracking-my-tiny'
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-delay={`${100 + 50}`}
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom">
            <p className='flex items-center text-true-gray-800 '><span className='mr-2 text-4xl text-my-primary'><AiOutlineFileDone /></span>{features?.fea1}</p>
            <p className='flex items-center text-true-gray-800 '><span className='mr-2 text-4xl text-my-primary'><AiOutlineFileDone /></span>{features?.fea2}</p>
            <p className='flex items-center text-true-gray-800 '><span className='mr-2 text-4xl text-my-primary'><AiOutlineFileDone /></span>{features?.fea3}</p>
            <p className='flex items-center text-true-gray-800 '><span className='mr-2 text-4xl text-my-primary'><AiOutlineFileDone /></span>{features?.fea4}</p>
            <p className='flex items-center text-true-gray-800 '><span className='mr-2 text-4xl text-my-primary'><AiOutlineFileDone /></span>{features?.fea5}</p>
            <p className='flex items-center text-true-gray-800 '><span className='mr-2 text-4xl text-my-primary'><AiOutlineFileDone /></span>{features?.fea6}</p>
        </div>
    );
};

export default ProductFeatures;