import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";
interface skipData {
  allowed_on_road?: boolean;
  allows_heavy_waste?: boolean;
  area?: string;

  forbidden?: boolean;
  hire_period_days?: number;
  id?: number;
  per_tonne_cost?: number;
  postcode?: string;
  price_before_vat?: number;
  size?: number;
  transport_cost?: string;

  vat?: number;
}
const ButtonMask = ({ className }: { className?: string }) => {
  return (
    <div
      id="mask"
      className={` absolute rounded-full z-0 bg-[#0037C1] h-0 ease-in-out duration-1000 group-hover/button:h-full left-0 right-0 bottom-0 opacity-70  ${className}`}
    ></div>
  );
};
const Skip = ({
  id,
  allowed_on_road,
  allows_heavy_waste,

  hire_period_days,

  price_before_vat,
  size,
}: skipData) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      {id ? (
        <div
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className={`group ${!allows_heavy_waste && "cursor-not-allowed lg:opacity-45 "} border  relative flex h-[260px]   w-full flex-col justify-between overflow-hidden  rounded-2xl  bg-transparent text-[#383A3C] shadow  transition   md:h-[300px]  `}
        >
          <div
            className={`z-10 md:z-90  w-full opacity-50 lg:opacity-100 h-screen ${allows_heavy_waste && "group-hover:-translate-y-[100%]  text-[0px] transition-transform duration-1000"}   object-cover  absolute bottom-0 top-0`}
          >
            <img
              alt="background"
              sizes=""
              className=" w-full h-screen "
              src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&"
            />
          </div>{" "}
          <span
            className={`text-2xl hidden rounded-4xl px-4 py-2 bg-[#0037C1] text-white text-bold absolute lg:flex flex-col top-1/2 z-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${allows_heavy_waste && "  group-hover:-translate-y-[20rem] transition-transform duration-1000"} `}
          >
            {size} yards
          </span>
          {allowed_on_road ? (
            ""
          ) : (
            <div
              className={`lg:text-xl  rounded-4xl px-4 py-2 bg-[#FB4D3D] mb-5 mx-11 text-white text-bold absolute flex flex-col justrify-start items-start gap-4 bottom-0 z-100 ${allows_heavy_waste && " group-hover:translate-y-[12rem]  transition-transform duration-500"}  `}
            >
              <span className="flex flex-row justify-center items-center">
                {" "}
                <HiOutlineExclamationTriangle className="mr-2" />{" "}
                <span> Private proprierty only</span>{" "}
              </span>
              {allows_heavy_waste ? (
                ""
              ) : (
                <>
                  {" "}
                  <span className="flex flex-row justify-center mr-2 items-center ">
                    {" "}
                    <HiOutlineExclamationTriangle />
                    <span> Not suitable for heavy waste</span>
                  </span>
                </>
              )}
            </div>
          )}
          <AnimatePresence>
            <motion.div
              key="container-text"
              layout
              transition={{
                layout: { type: "spring", stiffness: 30 },
              }}
              className={`relative grid h-full z-20 grid-cols-1  flex-col  gap-2 px-4 py-12 text-start  md:justify-between ${
                hovered ? "   gap-5 text-alb-site" : "text-gri-brand"
              } `}
              id="container-text"
            >
              <div className="flex h-full justify-between items-center gap-4 flex-col text-white">
                <div className="flex flex-col gap-4 ">
                  <span
                    className={`flex flex-row  overflow-ellipsis gap-2   text-[14px] font-[350] leading-[22px]  md:text-[16px] ${!allows_heavy_waste && "opacity-10 "} `}
                  >
                    <span className=" rounded-full px-2 bg-[#0037C1] justify-center items-center ">
                      {size} yards
                    </span>{" "}
                    skip
                  </span>
                  <span
                    className={` flex flex-row  overflow-ellipsis gap-2   text-[14px] font-[350] leading-[22px]  md:text-[16px] ${!allows_heavy_waste && "opacity-10 "} `}
                  >
                    <span className=" rounded-full px-2 bg-[#0037C1] justify-center items-center ">
                      {hire_period_days} days
                    </span>
                    hire period
                  </span>
                  <span
                    className={`  flex flex-row mt-4 overflow-ellipsis   gap-2 text-[14px] font-[350] leading-[22px]  md:text-[16px] ${!allows_heavy_waste && "opacity-10 "}  `}
                  >
                    <span className=" rounded-full px-2 bg-[#0037C1] justify-center items-center ">
                      {price_before_vat} £{" "}
                    </span>{" "}
                    per week
                  </span>
                </div>
                <button
                  onClick={() => console.log("send to PermitCheck")}
                  className={` z-50 group/button border relative flex justify-center rounded-full px-6 py-2  items-center h-fit w-fit overflow-visible   bg-transparent  text-sm font-light normal-case text-gri-bg shadow-none hover:scale-95 hover:shadow-none md:text-base ${
                    hovered && ""
                  }`}
                >
                  <span
                    className={`w-full cursor-pointer flex z-50 ${hovered && "text-alb-site"}`}
                  >
                    Select this skip
                  </span>
                  <ButtonMask />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Skip;
