import { CiTrash } from "react-icons/ci";
import { FaTruck } from "react-icons/fa";
import { IoShield } from "react-icons/io5";
import { MdOutlinePayment, MdOutlinePinDrop } from "react-icons/md";
const stepData = [
  {
    text: "Postcode",
    sign: <MdOutlinePinDrop className=" h-6 w-6 " />,
    checked: true,
    currentStep: false,
  },
  {
    text: "Waste Type",
    sign: <CiTrash className=" h-6 w-6 " />,
    checked: true,
    currentStep: false,
  },
  {
    text: "Select Skip",
    sign: <FaTruck className=" h-6 w-6 " />,
    checked: true,
    currentStep: true,
  },
  {
    text: "Permit Check",
    sign: <IoShield className=" h-6 w-6 " />,
    checked: false,
    currentStep: false,
  },
  {
    text: "Choose Date",
    sign: <MdOutlinePayment className=" h-6 w-6 " />,
    checked: false,
    currentStep: false,
  },
  {
    text: "Payment",
    sign: <MdOutlinePayment className=" h-6 w-6" />,
    checked: false,
    currentStep: false,
  },
];
export default stepData;
