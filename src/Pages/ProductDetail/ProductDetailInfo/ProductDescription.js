import React, { useEffect } from 'react';
import './Accordion.css'
import AOS from 'aos';

const ProductDescription = ({ product }) => {
    const { description, specs } = product;

    // initialize aos plugin
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay={`${100 + 90}`}
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom">
            <div className="about mt-10">
                <h4 className="text-3xl tracking-normal font-semibold mb-3">About this Car</h4>
                <p className="text-2xl font-my-title">Color: <span className="font-medium text-true-gray-800 text-2xl font-my-title">{specs?.color}</span></p>
                <p className="mt-3 leading-relaxed font-my-title tracking-my-tiny text-2xl">{description?.desc}</p>
            </div>


            {/* Accordion Starts Here */}


            <div className="accordion mt-5" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="mb-0" id="headingOne">
                        <button className="
                        text-2xl
        accordion-Button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
         text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                            aria-controls="collapseOne">
                            {description?.desc_feature.question.ques1}
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="font-my-title tracking-my-tiny text-2xl py-4 px-5">
                            {description?.desc_feature.answer.ans1}
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                        <button className="
                        text-2xl
        accordion-Button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
         text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">
                            {description?.desc_feature.question.ques2}
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="font-my-title tracking-my-tiny text-2xl py-4 px-5">
                            {description?.desc_feature.answer.ans2}
                        </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button className="
                        text-2xl
        accordion-Button
        collapsed
        relative
        flex
        items-center
        w-full
        py-4
        px-5
         text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">
                            {description?.desc_feature.question.ques3}
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="font-my-title tracking-my-tiny text-2xl py-4 px-5">
                            {description?.desc_feature.answer.ans3}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductDescription;