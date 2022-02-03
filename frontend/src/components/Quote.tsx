import { useState } from "react";
const Quote = (props: any) => {
  return (
    <>
        <div className=" relative  my-[3rem] lg:my-0  lg:top-[-12rem]" >
          <p className="text-white">/01</p>
            <progress value={60} max={100} className="text-red-500 progress h-1 sm:w-[20rem] w-[15rem]"  />
            <h3 className="text-xl text-white">Work collection</h3>
            <p className="text-slate-400 w-32">
              Lorem ipsum dolor sit amet consectetur 
            </p>
      </div>
    </>
  );
};
export default Quote;
