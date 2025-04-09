import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataState, fetchData } from "../../../redux/slices/dataSlice";
import { AppDispatch, IRootState } from "../../../redux/store";
import Skip from "./Skip";

const SkipsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const skips: DataState = useSelector((state: IRootState) => state.data);
  const loading = useSelector((state: IRootState) => state.data.loading);
  const error = useSelector((state: IRootState) => state.data.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <div
      id="skipsContainer"
      className="flex flex-col w-full"
    >
      {error && <p>{error}</p>}
      {loading ? (
        "Loading..."
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5">
          {skips.data.map(
            ({
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
            }) => (
              <Skip
                key={id}
                id={id}
                allowed_on_road={allowed_on_road}
                allows_heavy_waste={allows_heavy_waste}
                area={area}
                forbidden={forbidden}
                hire_period_days={hire_period_days}
                per_tonne_cost={per_tonne_cost}
                postcode={postcode}
                price_before_vat={price_before_vat}
                size={size}
                transport_cost={transport_cost}
                vat={vat}
              />
            ),
          )}
        </div>
      )}

      <Skip />
    </div>
  );
};

export default SkipsContainer;
