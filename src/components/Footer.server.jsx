import { Link } from '@shopify/hydrogen';
import {MdLocationPin,MdOutlineAlternateEmail,MdSettingsPhone} from 'react-icons/md'
/**
 * A server component that specifies the content of the footer on the website
 */
export default function Footer({ collection, product }) {
  const year  = new Date().getFullYear();
  return (
    <>
      <div className="w-full">
        <div className="flex">
          <div className="flex flex-wrap bg-slate-100 w-[60%] py-16 bg-gradient-to-r from-black to-gray-700 bg-blend-multiply p-3">
            <div className="w-[40%] mx-auto ">
              <div className="w-[140px] py-6">
                <img src="/image/semmsluxuries.svg" alt="semmsluxuries" />
              </div>
              <div className="flex text-gold gap-2 pb-3">
                <MdLocationPin size="27" />
                <p className="text-myGray font-normal text-[15px]">1810 First Oaks St, Richmond, TX 77406</p>
              </div>
              <div className="flex text-gold gap-2 pb-3">
                <MdOutlineAlternateEmail MdSettingsPhone size="20" />
                <p className="text-myGray font-normal text-[15px]">support@semmsluxury.com</p>
              </div>
              <div className="flex text-gold gap-2 pb-3">
                <MdSettingsPhone size="20" />
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
    </>
  );
}
