import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { CgShoppingBag } from 'react-icons/cg'
import {FaShippingFast, FaPercent} from 'react-icons/fa'
import {CgDesignmodo} from 'react-icons/cg'
import {GrStar} from 'react-icons/gr'


const About = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <BenefitSection />
            <FeaturedProducts />
            <ParallaxSection />
        </>
    )
}

export default About


const parallax = "https://images.unsplash.com/photo-1457972657980-4c9fddebec8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

export function ParallaxSection() {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${parallax})` }}>
            <div className="bg-black bg-opacity-50 h-screen pt-20 w-full" >

                <div className="w-[80%] mx-auto px-4 py-16">
                    <div className="flex flex-col">
                        <div className="bg-white w-[60%] p-8 rounded-sm">
                            <h1 className="text-gray-800 text-xl font-medium">
                                Top Quality Leather Luggages Company
                            </h1>
                            <h1 className="text-gray-800 text-4xl font-bold uppercase py-4">
                                Trading since 2019
                            </h1>
                            <p className="text-gray-500 text-md">
                                Howerver you wish to pack. Whatever your need is, we have the solution. 
                            </p>
                            <p className="text-gray-500 text-md">
                            As a family owned business, we pride ourselves on our personal customer service. That can be proven by our amazing customer ratings and reviews.

We offer a diverse range of products to suit all, as well as offering great deals! We also offer a product personalization service for the majority of our items, and subject to availability.
                            </p>

                            <div className="pt-8">
                            <button className="bg-gray-800 hover:bg-star hover:text-gray-800 text-white font-semibold text-sm py-2 px-4 rounded-md">
                                Learn More
                            </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export function StarRating() {
    return (
        <>
        <div className="flex flex-auto justify-center ">
        <GrStar className="text-star" size="14"/>
        <GrStar className="text-star" size="14"/>
        <GrStar className="text-star" size="14"/>
        <GrStar className="text-star" size="14"/>
        <GrStar className="text-star" size="14"/>
        </div>
        </>
    )
}

export function FeaturedProducts() {
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

export function BenefitSection() {
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

export function HeroSection() {
    return (
        <>
            <div className="w-full min-h-screen bg-gradient-to-t from-gray-900 to-black bg-blend-multiply">
                <div className="flex flex-wrap justify-center w-full pb-24">
                    <div className="mt-16">
                        <div className="flex mt-48 w-[80%] mx-auto">
                            <div className="flex-auto text-left max-w-[55%]">
                                <h1 className="text-white text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gold to-yellow-300 uppercase">
                                    SEMMS Luxury Collections
                                </h1>
                                <p className="bg-clip-text text-transparent bg-gradient-to-b from-yellow-300 to-yellow-100 font-normal text-2xl py-8 uppercase">Feel Luxury. Your Travel Contents Are as Important as You Are. Own One that suits your personality.</p>
                                <div className="flex justify-start space-x-6 py-4">
                                    <button className="bg-gold text-black font-bold py-2 px-4 rounded-md">
                                        Our Collections
                                    </button>
                                    <button className=" text-gold outline outline-offset-2 outline-1 font-bold py-2 px-4 rounded-md">
                                        Discover our story
                                    </button>
                                </div>
                                <div className="flex justify-start space-x-6">
                                    <div><h3 className="text-gray-500 pt-12 text-sm"><span className="text-2xl font-bold">5+ </span>Unique Styles</h3></div>

                                    <div><h3 className="text-gray-500 pt-12 text-sm"><span className="text-2xl font-semibold">| </span></h3></div>

                                    <div><h3 className="text-gray-500 pt-12 text-sm"><span className="text-2xl font-bold">Top </span> Grain Leather</h3></div>
                                </div>
                            </div>

                            <div className="flex-auto pl-16">
                                <div className="-mt-16">
                                    <img src="/image/brown.png" alt="brown bag" className="-mt-2 ml-2" width="170" />
                                </div>
                                <div className="ml-52 -mt-32" >
                                    <img src="/image/red.png" alt="red bag" className="-mt-2 ml-2" width="170" />
                                </div>
                                <div className="ml-2 -mt-16 w-2/5">
                                    <img src="/image/pink.png" alt="pink bag" className="-mt-2 ml-2" width="170" />

                                    {/* <p className=" text-white outline outline-1 font-thin py-2 px-4 ">
                                        Starting from $149.99
                                    </p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export function Header() {
    return (
        <>
            <header className="z-20 fixed w-full backdrop-blur-md">
                <div className="flex justify-between mx-auto px-16 h-10 py-12">
                    <div>
                        {/* logo */}
                        <img src="/image/semmsluxuries.svg" alt="logo" className="-mt-2 ml-2" width="125" />
                    </div>
                    {/* menu */}
                    <div className="mx-auto">
                        <div>
                            <ul className="flex uppercase">
                                <li className="mr-6 ">
                                    <a href="#" className="text-gold text-sm font-normal leading-none">
                                        Home
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a href="#" className="text-gold text-sm font-normal leading-none">
                                        Collections
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a href="#" className="text-gold text-sm font-normal leading-none">
                                        Discover
                                    </a>
                                </li>
                                <li className="mr-6">
                                    <a href="#" className="text-gold text-sm font-normal leading-none">
                                        Story
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                    {/* cart el */}
                    <div>
                        <a href="#" className="text-gold text-sm font-normal leading-none">
                            <FiSearch size={20} className="inline-block mr-6" />
                        </a>
                        <a href="#" className="text-gold text-sm font-normal leading-none">
                            <CgShoppingBag size={20} className="inline-block mr-2" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}