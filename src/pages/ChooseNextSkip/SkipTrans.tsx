import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { IoArrowForwardSharp } from "react-icons/io5";

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

const CardBlog = ({
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

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className="group   relative flex h-[430px]   w-full flex-col justify-between overflow-hidden  rounded-2xl border-none bg-transparent text-[#383A3C] shadow  transition   md:h-[500px]  "
    >
      <div
        key="mask"
        className="absolute bottom-0 left-0 right-0 top-0 z-20 h-full origin-top -translate-y-72 overflow-hidden rounded-2xl bg-black bg-fixed opacity-0 transition-all duration-500  group-hover:translate-y-0 group-hover:opacity-50 "
      />
      <div className=" flex h-1/2 w-full md:h-1/3  ">
        <img
          alt="background"
          sizes=""
          className="z-10 w-full  -translate-y-[60%] object-cover transition-transform duration-500 hover:absolute group-hover:bottom-0 group-hover:top-0 group-hover:-translate-y-0"
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&"
        />
      </div>
      <AnimatePresence>
        <motion.div
          key="container-text"
          layout
          transition={{
            layout: { type: "spring", stiffness: 30 },
          }}
          className={`relative z-20 flex h-[59%] flex-col justify-end gap-2 px-4 py-2 text-start  md:justify-between ${
            hovered ? "mt-auto h-[88%]  gap-5 text-alb-site" : "text-gri-brand"
          } `}
          id="container-text-bloguri"
        >
          <div className="flex h-full flex-col gap-3">
            <h4 className="h-[40%]  text-base font-medium md:text-[1.1rem] md:leading-8">
              titlu
            </h4>
            <p className=" h-[40%] overflow-ellipsis    text-[14px] font-[350] leading-[22px]  md:text-[16px]">
              paragraph
            </p>
            <button
              className={`z-50  flex h-fit w-fit overflow-visible   bg-transparent pl-0 text-sm font-light normal-case text-gri-bg shadow-none hover:scale-95 hover:shadow-none md:text-base ${
                hovered && "text-alb-site"
              }`}
            >
              <span className={`${hovered && "text-alb-site"}`}>Select</span>
              {hovered && (
                <IoArrowForwardSharp className="ml-2 text-alb-site" />
              )}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CardBlog;
