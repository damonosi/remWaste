import { JSX, useEffect, useState } from "react";
import { context } from "./Context";
type Props = {
  children: string | JSX.Element | JSX.Element[];
};
const Provider = ({ children }: Props) => {
  const [data, setData] = useState({ one: 1 });

  useEffect(() => {
    setData({ one: 3 });
    console.log(context);
  }, []);

  const { Provider } = context;
  return <Provider value={data}>{children}</Provider>;
};
export default Provider;
