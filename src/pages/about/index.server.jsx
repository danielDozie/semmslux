import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { CgShoppingBag } from 'react-icons/cg'
import {FaShippingFast, FaPercent} from 'react-icons/fa'
import {CgDesignmodo} from 'react-icons/cg'
import {GrStar} from 'react-icons/gr'
import {MdLocationPin,MdOutlineAlternateEmail,MdSettingsPhone} from 'react-icons/md'


const About = () => {

    return (
        <>
            <Header />
            <HeroSection />
            <BenefitSection />
            <FeaturedProducts />
            <ParallaxSection />
            <Highlights />
            <FooterSection />
        </>
    )
}

export default About



export function FooterSection() {
    const year  = new Date().getFullYear();
    return (<>
        <div className="w-full">
            <div className="flex">
                <div className="flex flex-wrap bg-slate-100 w-[60%] py-16 bg-gradient-to-r from-black to-gray-700 bg-blend-multiply p-3">
                <div className="w-[40%] mx-auto ">
                    <div className="w-[140px] py-6">
                    <img src="/image/semmsluxuries.svg" alt="semmsluxuries" />
                    </div>
                    <div className="flex text-gold gap-2 pb-3">
                        <MdLocationPin size="27"/>
                        <p className="text-myGray font-normal text-[15px]">1810 First Oaks St, Richmond, TX 77406</p>
                    </div>
                    <div className="flex text-gold gap-2 pb-3">
                        <MdOutlineAlternateEmail MdSettingsPhone size="20"/>
                        <p className="text-myGray font-normal text-[15px]">support@semmsluxury.com</p>
                    </div>
                    <div className="flex text-gold gap-2 pb-3">
                        <MdSettingsPhone size="20"/>
                        <p className="text-myGray font-normal text-[15px]">+1 (281)-762-7955</p>
                    </div>
                </div>
                <div className="w-[20%] mx-auto">
                    <h1 className="text-2xl font-bold text-myGray underline underline-offset-8 pt-6">
                        Information
                    </h1>
                    <div className="mt-8">
                            <ul>
                                <li className="text-myGray font-normal text-[15px] pb-2">
                                    <a href="#">About Us</a>
                                </li>
                                <li className="text-myGray font-normal text-[15px] pb-2">
                                    <a href="#">Collections</a>
                                </li>
                                <li className="text-myGray font-normal text-[15px] pb-2">
                                    <a href="#">Discover</a>
                                </li>
                                <li className="text-myGray font-normal text-[15px] pb-2">
                                    <a href="#">Our Story</a>
                                </li>

                                
                            </ul>
                        </div>
                </div>
                </div>
                <div className="flex flex-auto bg-white px-8 py-16 mx-auto justify-apart gap-x-28">
                    <div className="min-w-[20%]">
                    <h1 className="text-2xl font-bold text-gray-800 underline underline-offset-8 pt-6">
                            Useful Links
                        </h1>
                        <div className="mt-8">
                            <ul>
                                <li className="text-gray-800 font-normal text-[15px] pb-2">
                                    <a href="#">Account</a>
                                </li>
                                <li className="text-gray-800 font-normal text-[15px] pb-2">
                                    <a href="#">Delivery</a>
                                </li>
                                <li className="text-gray-800 font-normal text-[15px] pb-2">
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li className="text-gray-800 font-normal text-[15px] pb-2">
                                    <a href="#">Terms & Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-bold text-gray-800 underline underline-offset-8 pt-6">
                            Supports
                        </h1>
                        <div className="mt-8">
                            <ul>
                                <li className="text-gray-800 font-normal text-[15px] pb-2">
                                    <a href="#">Contacts</a>
                                </li>
                                <li className="text-gray-800 font-normal text-[15px] pb-2">
                                    <a href="#">Returns</a>
                                </li>
                                <li className="text-gray-800 font-normal text-[15px] pb-2">
                                    <a href="#">Sitemap</a>
                                </li>
                                <li className="text-gray-800 font-normal text-[15px] pb-2">
                                    <a href="#">Affiliates</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex p-3 justify-between font-light text-gray-800 text-sm border-t-2 border-yellow-500">
                 <div className="pl-20 text-left">
                     <p>Copyright &copy; {year}. SEMMS Luxury Luggages.</p>
                </div>
                 <div className="flex pr-20 gap-x-8">
                     <a href="#">
                     <p>Facebook</p>
                     </a>
                     <a href="#">
                     <p>Instagram</p>
                     </a>
                     <a href="#">
                     <p>Tiktok</p>
                     </a>
                </div>
            </div>
        </div>
    </>)
}

export function Highlights(){
    return (
        <>
            <div className="w-ful min-h-full bg-myGray">
                <div className="container mx-auto px-4 py-24">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <FaShippingFast className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold uppercase text-gray-600">Free Shipping</h5>
                                        <p className="text-gray-800">Free shipping on all orders over $800</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <FaPercent className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold uppercase text-gray-600">30% Off</h5>
                                        <p className="text-gray-800">All items are 30% off</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <CgDesignmodo className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold uppercase text-gray-600">Free Returns</h5>
                                        <p className="text-gray-800">Free returns on all items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-[80%] mx-auto px-4 py-16">
                            <div className="my-4 mx-auto text-center">
                                <h1 className="text-2xl font-bold text-gray-500">
                                    Newsletter
                                </h1>
                                <h1 className="text-5xl font-bold text-gray-800 py-4 ">Let&apos;s keep in touch with you</h1>
                                <p className="text-md font-regular text-gray-500">Subscribe to our newsletter for new products alert and updates on our stories</p>
                                <div className="flex flex-wrap py-8 mx-auto justify-center">
                                    <input type="text" className="w-1/2 p-4" placeholder="Enter your email" />
                                    <button className="bg-gold text-white font-semibold py-2 px-4 hover:bg-gray-800 hover:text-white">Subscribe</button>
                                </div>
                                <p className="text-gray-400 text-[10px]  -mt-6">*We won&apos;t spam your email. We promise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
        </>
    )
}


const parallax = "https://images.unsplash.com/photo-1457972657980-4c9fddebec8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

export function ParallaxSection() {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${parallax})` }}>
            <div className="bg-black bg-opacity-50 h-screen pt-20 w-full">

                <div className="w-[80%] mx-auto px-4 py-16">
                    <div className="flex flex-col">
                        <div className="bg-white w-[60%] p-8 rounded-sm">
                            <h1 className="text-gray-600 text-xl font-medium">
                                Top Quality Leather Luggage Company
                            </h1>
                            <h1 className="text-gray-600 text-4xl font-bold uppercase py-4">
                                Established since 2019
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