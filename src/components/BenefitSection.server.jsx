import React from 'react'
import {FaShippingFast, FaPercent} from 'react-icons/fa'
import {CgDesignmodo} from 'react-icons/cg'

export default function BenefitSection() {
    return (
        <>
            <div className="w-full min-h-screen bg-gold">
                <div className="flex flex-wrap w-[80%] mx-auto">
                    <div className="my-20 w-[50%]">
                        <h1 className="text-left text-4xl font-bold text-gray-800 ">
                            Quality Never Goes Out of Style.
                        </h1>
                        <p className="text-gray-800 py-6">We make top luggages, handbags, accessories, kids collections, and more. With a wide variety of brands, thousands of products, and customer-generated ratings and reviews, we are committed to helping our customers with the best travel bags and accessories.</p>
                    </div>
                    <div className="flex my-20 pl-12 w-[50%] pt-12">
                        <div className="bg-white mr-4 drop-shadow-md rounded-md max-h-24 min-w-[50%]">
                            <div className="p-4">
                                <h1 className="text-center text-sm font-bold text-gray-800 ">
                                    Quality  Assurance
                                </h1>
                                <h1 className="text-center text-2xl font-semibold text-green-700 py-2 ">
                                    95% <span className="text-sm font-medium text-gray-800">Avg. Rating</span>
                                </h1>
                            </div>
                        </div>
                        <div className="bg-gray-800 mr-4 drop-shadow-md rounded-md max-h-24 min-w-[50%]">
                            <div className="p-4">
                                <h1 className="text-center text-sm font-bold text-white ">
                                    Excellent Materials
                                </h1>
                                <h1 className="text-center text-2xl font-semibold text-green-700 py-2 ">
                                    100% <span className="text-sm font-medium text-white">User Reviews </span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-auto">
                        <div className="bg-white mr-4 drop-shadow-xl rounded-md h-40 min-w-[30%]">
                            <div className="p-4">
                                <h1 className="text-center text-lg font-bold text-gray-800 ">
                                    Enjoy Massive Sale
                                </h1>
                                <span className="py-8">
                                 <FaPercent className="text-green-700 mx-auto my-2" size="38"/>
                                </span>
                                <p className="text-center text-sm font-medium text-gray-500">Watch out for our biggest ever sale, with items up to 30% off!</p>
                            </div>
                        </div>
                        <div className="bg-white mr-4 drop-shadow-xl rounded-md h-40 min-w-[30%]">
                            <div className="p-4">
                                <h1 className="text-center text-lg font-bold text-gray-800 ">
                                    Ship To Contiguous U.S.A
                                </h1>
                                <span className="py-8">
                                 <FaShippingFast className="text-green-700 mx-auto my-2" size="40"/>
                                </span>
                                <p className="text-center text-sm font-medium text-gray-500">Watch out for our biggest ever sale, with items up to 30% off!</p>
                            </div>
                        </div>
                        <div className="bg-white mr-4 drop-shadow-xl rounded-md h-40 min-w-[30%]">
                            <div className="p-4">
                                <h1 className="text-center text-lg font-bold text-gray-800 ">
                                    Personalization On Request
                                </h1>
                                <span className="py-8">
                                 <CgDesignmodo className="text-green-700 mx-auto my-2" size="40"/>
                                </span>
                                <p className="text-center text-sm font-medium text-gray-500">Watch out for our biggest ever sale, with items up to 30% off!</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
