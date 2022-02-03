import { useState } from "react";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";
const Sidebar = (props: any) => {
  return (
    <>
      <div className=" absolute top-[0] left-[0]  h-[100vh] w-[6rem] flex justify-center">
        <h2 className="text-slate-100 font-bold text-xl my-4">
          <span className="text-4xl">X</span>
          <span>citEdu</span>
        </h2>
        <div className="text-white absolute bottom-[10rem]">
          <Instagram className="my-4 text-2xl" />
          <Linkedin  className="my-4 text-2xl"/>
          <Facebook  className="my-4 text-2xl"/>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
