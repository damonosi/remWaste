import stepData from "./indicatorData";

const StepMask = ({ className }: { className?: string }) => {
  return (
    <div
      id="mask"
      className={` absolute  bg-[#0037C1] h-0 ease-in-out duration-1000 group-hover:h-full left-0 right-0 bottom-0 opacity-70 z-10 ${className}`}
    ></div>
  );
};

const StepIndicator = () => {
  const lastStep = stepData.length - 1;

  return (
    <div
      className={`grid grid-rows-1 grid-flow-col grid-cols-${lastStep + 1} w-full justify-between h-fit `}
    >
      {stepData.map(({ text, checked, sign, currentStep }, index) => {
        return (
          <div
            className={` flex items-center `}
            key={index}
          >
            {checked == true ? (
              <>
                <button
                  className={`group relative flex overflow-hidden  cursor-pointer w-full bg-none! mx-2 px-4 py-2 items-center border   rounded-4xl justify-center  ${currentStep ? "border rounded-4xl " : "text-[#0037C1]"}`}
                >
                  <span
                    className={` h-6 w-6 ease-in-out duration-600 z-100 group-hover:scale-125 text-[#0037C1] group-hover:text-white/80 ${currentStep ? "scale-125 text-white/80" : ""}`}
                  >
                    {sign}
                  </span>
                  <span
                    key={index}
                    className={`ml-2 ease-in-out duration-600  z-100 group-hover:text-white/80 ${currentStep ? " text-white/80" : ""}`}
                  >
                    {text}
                  </span>
                  {currentStep ? <StepMask className="h-full" /> : <StepMask />}
                </button>

                {index !== lastStep ? (
                  <>
                    {currentStep ? (
                      <>
                        <div className="w-16 h-px my-auto  bg-white/80 opacit-50 z-50" />
                      </>
                    ) : (
                      <div className="w-16 h-px my-auto flex bg-[#0037C1] " />
                    )}
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              <>
                <button className="flex cursor-not-allowed border rounded-4xl  w-full bg-none! mx-2 px-4 py-2 items-center justify-center text-white/60 opacit-50">
                  <span className=" h-6 w-6 ">{sign}</span>
                  <span
                    key={index}
                    className="ml-2"
                  >
                    {text}
                  </span>
                </button>
                {index !== lastStep ? (
                  <div className="w-16 h-px my-auto bg-white/60 opacit-50" />
                ) : (
                  ""
                )}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
export default StepIndicator;
