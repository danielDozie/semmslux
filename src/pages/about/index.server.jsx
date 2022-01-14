import React from 'react'
import Header from '../../components/Header.client'
import Layout from '../../components/Layout.server'
import {GiCircleClaws} from 'react-icons/gi'
import {FiSearch} from 'react-icons/fi'
import {CgShoppingBag} from 'react-icons/cg'
import {BsCircleFill} from 'react-icons/bs'

const About = () => {
    return (
        <>
        <header className="z-20 fixed w-full bg-black">
            <div className="flex justify-between mx-auto px-16 h-10 py-12">
                    <div>
                        {/* logo */}
                            <img src="/image/semmsluxuries.svg" alt="logo" className="-mt-2 ml-2" width="125"/>
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
            <div className="w-full min-h-screen bg-gradient-to-t from-gray-900 to-black bg-blend-multiply">
                <div className="flex flex-wrap justify-center w-full pb-16">
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
                            </div>
                            <div className="flex-auto pl-16">
                                <div className="-mt-16">
                                    <img  src="/image/brown.png" alt="brown bag" className="-mt-2 ml-2" width="170"/>
                                </div>
                                <div className="ml-52 -mt-32" >
                                    <img src="/image/red.png" alt="red bag" className="-mt-2 ml-2" width="170"/>
                                </div>
                                <div className="ml-2 -mt-16 w-2/5">
                                    <img className="" src="/image/pink.png" alt="pink bag" className="-mt-2 ml-2" width="170"/>

                                    {/* <p className=" text-white outline outline-1 font-thin py-2 px-4 ">
                                        Starting from $149.99
                                    </p> */}
                                </div>
                            </div>
                        
                         </div>   
                    </div>
                </div>
            </div>
            </>
    )
}

export default About



