import { useState } from "react";
import {Link} from 'react-router-dom'
const Footer = (props: any) => {
    const goToTop=()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
      }
  return (
    <>
        <footer className="text-white  mt-[100px] lg:mt-0 bg-black lg:bg-transparent flex flex-wrap justify-center items-center relative lg:absolute bottom-0  min-h-[30vh] backdrop-blur-[20px]" >
      <div className="p-2
       text-sm footer-nav flex flex-wrap justify-around">
        <Link className="text-gray-100 text-center px-8 py-2 w-full sm:w-auto link" to="/about" onClick={goToTop}>
          ABOUT US
        </Link>
        <Link to="/careers" onClick={goToTop} className="text-center px-8 py-2 w-full sm:w-auto text-gray-100 link">
          CAREERS
        </Link>
        <Link to="/blogs" onClick={goToTop} className="text-center px-8 py-2 w-full sm:w-auto text-gray-100 link">
          BLOGS
        </Link>
        <Link to="/privacy-policy" onClick={goToTop} className="text-center px-8 py-2 w-full sm:w-auto text-gray-100 link">
          PRIVACY POLICY
        </Link>
        <Link to="/terms-and-conditions" onClick={goToTop} className="text-center px-8 py-2 w-full sm:w-auto text-gray-100 link">
          
          TERMS & CONDITIONS

        
        </Link>
        <Link  to="/refund-policy" onClick={goToTop} className="text-center px-8 py-2 w-full sm:w-auto text-gray-100 link ">
          REFUND POLICY
        </Link>
        <Link  to="/equal-opportunity" onClick={goToTop} className="text-center px-8 py-2 w-full sm:w-auto text-gray-100 link ">
         EQUAL OPPORTUNITY
        </Link>
      </div>

      <div className="  flex items-center  flex-wrap justify-around ">
        <div className=" text-center  text-lg text-gray-400 w-full">
          Xcitedu Software Solutions Pvt. Ltd, Delhi
        </div>
        <div className="text-gray-400 text-sm">© Copyright 2022. All Rights Reserved.</div>
      </div>
    </footer>
    </>
  );
};
export default Footer;
