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

const Skip = ({
  id,
  allowed_on_road,
  allows_heavy_waste,
  area,
  forbidden,
  hire_period_days,
  per_tonne_cost,
  postcode,
  price_before_vat,
  size,
  transport_cost,
  vat,
}: skipData) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  console.log(allows_heavy_waste);
  return (
    <>
      {id ? (
        <div
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          className={`group ${!allows_heavy_waste && "cursor-not-allowed opacity-45"} border  relative flex h-[430px]   w-full flex-col justify-between overflow-hidden  rounded-2xl  bg-transparent text-[#383A3C] shadow  transition   md:h-[300px]  `}
        >
          <div
            className={`z-90 w-full h-screen ${allows_heavy_waste && "group-hover:-translate-y-[100%] transition-transform duration-1000"}   object-cover  absolute bottom-0 top-0`}
          >
            <img
              alt="background"
              sizes=""
              className=" w-full h-screen "
              src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&"
            />
          </div>{" "}
          <span
            className={`text-2xl  rounded-4xl px-4 py-2 bg-[#0037C1] text-white text-bold absolute flex flex-col top-1/2 z-100 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${allows_heavy_waste && "  group-hover:-translate-y-[20rem] transition-transform duration-1000"} `}
          >
            {size} yards
          </span>
          {allowed_on_road ? (
            ""
          ) : (
            <div
              className={`text-xl  rounded-4xl px-4 py-2 bg-[#FB4D3D] mb-5 mx-11 text-white text-bold absolute flex flex-col justrify-start items-start gap-4 bottom-0 z-100 ${allows_heavy_waste && " group-hover:translate-y-[3rem] transition-transform duration-500"}  `}
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
                  <span className=" flex flex-row  overflow-ellipsis gap-2   text-[14px] font-[350] leading-[22px]  md:text-[16px]">
                    <span className=" rounded-full px-2 bg-[#0037C1] justify-center items-center ">
                      {size} yards
                    </span>{" "}
                    skip
                  </span>
                  <span className="  flex flex-row  overflow-ellipsis gap-2   text-[14px] font-[350] leading-[22px]  md:text-[16px]">
                    <span className=" rounded-full px-2 bg-[#0037C1] justify-center items-center ">
                      {hire_period_days} days
                    </span>
                    hire period
                  </span>
                  <span className="  flex flex-row mt-4 overflow-ellipsis   gap-2 text-[14px] font-[350] leading-[22px]  md:text-[16px]">
                    <span className=" rounded-full px-2 bg-[#0037C1] justify-center items-center ">
                      {price_before_vat} £{" "}
                    </span>{" "}
                    per week
                  </span>
                </div>
                <button
                  className={`z-50  flex h-fit w-fit overflow-visible   bg-transparent pl-0 text-sm font-light normal-case text-gri-bg shadow-none hover:scale-95 hover:shadow-none md:text-base ${
                    hovered && ""
                  }`}
                >
                  <span className={`${hovered && "text-alb-site"}`}>
                    Select this skip
                  </span>
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
