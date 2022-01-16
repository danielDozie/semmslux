import {useState} from 'react';
import {Link} from '@shopify/hydrogen/client';

import CartToggle from './CartToggle.client';
import CurrencySelector from './CurrencySelector.client';
import Navigation from './Navigation.client';
import MobileNavigation from './MobileNavigation.client';


import { FiSearch } from 'react-icons/fi'
import { CgShoppingBag } from 'react-icons/cg'

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header({collections, storeName}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  
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
                      {menuItem.map(menu => 
                        <li className="mr-6" key={menu.id}>
                            <Link to={menu.link} className="text-gold text-sm font-normal leading-none">
                                {menu.title}
                            </Link>
                        </li>
                      )}
                    </ul>
                </div>
            </div>
            {/* cart elements */}
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
  );
}


//Menu items
const menuItem = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Collections',
    link: '/collections',
  },
  {
    id: 3,
    title: 'Discover',
    link: '/discover',
  },
  {
    id: 4,
    title: 'Story',
    link: '/story',
  },
]