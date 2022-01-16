import React from 'react'
import { GrStar } from 'react-icons/gr'

export default function FeaturedProducts() {
    return (<>
        <div className="w-full min-h-screen bg-white">
            <div className="max-w-5xl mx-auto mt-16 mb-8">
                <h1 className="font-bold text-5xl text-gray-700 py-2">Featured</h1>
                <p className="font-thin text-xl text-gray-500">Top selling products </p>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-4 w-[80%] mx-auto">
                <div>
                    <div className="bg-myGray min-h-[280px] min-w-[250px]">
                        <div className="p-4">
                            <div>
                                <img className="w-full" src="/image/redbag.png" alt="red" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center mx-auto text-center drop-shadow-md">
                        <h1 className="font-medium text-[10px]  text-gray-400 my-2 uppercase">Semms</h1>
                        <StarRating />
                        <p className="font-semibold text-sm text-gray-500 py-2">Red Lux Luggage</p>
                        <p className="font-semibold text-sm text-gray-500 pb-3">$100.00</p>
                        <button className="bg-gold text-white font-semibold py-2 px-4 rounded-full text-sm">Add to cart</button>
                    </div>
                </div>
                <div>
                    <div className="bg-myGray min-h-[280px] min-w-[250px]">
                        <div className="p-4">
                            <div>
                                <img className="w-full" src="/image/hotpinkbag.png" alt="red" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center mx-auto text-center drop-shadow-md">
                        <h1 className="font-medium text-[10px]  text-gray-400 my-2 uppercase">Semms</h1>
                        <StarRating />
                        <p className="font-semibold text-sm text-gray-500 py-2">Hot Pink Lux Luggage</p>
                        <p className="font-semibold text-sm text-gray-500 pb-3">$100.00</p>
                        <button className="bg-gold text-white font-semibold py-2 px-4 rounded-full text-sm">Add to cart</button>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="bg-myGray min-h-[280px] min-w-[250px]">
                        <div className="p-4">
                            <div>
                                <img className="w-full" src="/image/brownbag.png" alt="red" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center mx-auto text-center drop-shadow-md">
                        <h1 className="font-medium text-[10px]  text-gray-400 my-2 uppercase">Semms</h1>
                        <StarRating />
                        <p className="font-semibold text-sm text-gray-500 py-2">Brown Lux Luggage</p>
                        <p className="font-semibold text-sm text-gray-500 pb-3">$100.00</p>
                        <button className="bg-gold text-white font-semibold py-2 px-4 rounded-full text-sm">Add to cart</button>
                    </div>
                </div>
                <div>
                    <div className="bg-myGray min-h-[280px] min-w-[250px]">
                        <div className="p-4">
                            <div>
                                <img className="w-full" src="/image/lightPink.png" alt="red" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-center items-center mx-auto text-center drop-shadow-md">
                        <h1 className="font-medium text-[10px]  text-gray-400 my-2 uppercase">Semms</h1>
                        <StarRating />
                        <p className="font-semibold text-sm text-gray-500 py-2">Light Pink Lux Luggage</p>
                        <p className="font-semibold text-sm text-gray-500 pb-3">$100.00</p>
                        <button className="bg-gold text-white font-semibold py-2 px-4 rounded-full text-sm">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>)
}


export function StarRating() {
    return (
        <>
            <div className="flex flex-auto justify-center ">
                <GrStar className="text-star" size="14" />
                <GrStar className="text-star" size="14" />
                <GrStar className="text-star" size="14" />
                <GrStar className="text-star" size="14" />
                <GrStar className="text-star" size="14" />
            </div>
        </>
    )
}
