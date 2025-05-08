import React from "react";
import Cardmain from "../Components/Cardmain";
import Cardchard from "./Cardchard";
import Cartchard1 from "./Cartchard1";

function Modern() {
  return (
    <header className="container max-w-lvw h-full">
      <div className="flex flex-col justify-center ">
        <Cardmain />
        <div className=" lg:flex-row overflow-auto md:flex-col md:h-[450px] h-auto justify-center gap-3 flex-col flex ">
          <div className="lg:w-[760px] md:w-full max-w-4xl w-full">
            <Cardchard />
          </div>
          <div className="flex flex-col lg:w-[368px] md:w-full w-full ">
            <Cartchard1 />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Modern;
