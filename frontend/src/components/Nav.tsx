import { useState } from "react";
import { demo } from "../actions/action1";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "react-bootstrap-icons";
const Nav = () => {
  // const dt=useSelector((state:any)=>state.demo)
  // const dispatch=useDispatch
  // dispatch(demo(5))

  return (
    <>
      <div className="text-center flex  h-[10vh] justify-between items-center text-xl font-bold bg-black">
        <div></div>
        <div className="sm:block hidden">
          <button className=" text-white mx-2 text-sm bg-gray-900 h-10  px-4">
            nav-btn
          </button>
          <button className=" text-white mx-2 text-sm bg-gray-900 h-10  px-4">
            nav-btn
          </button>
          <button className=" text-white mx-2 text-sm bg-gray-900 h-10  px-4">
            nav-btn
          </button>
          <button className=" text-white mx-2 text-sm bg-gray-900 h-10  px-4">
            nav-btn
          </button>
          <button className=" text-white mx-2 text-sm bg-gray-900 h-10  px-4">
            nav-btn
          </button>
          <button className=" text-white mx-2 text-sm bg-gray-900 h-10  px-4">
            <Search />
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
