import SkipsContainer from "./SkipsContainer";

const ChooseNextSkipPage = () => {
  return (
    <section className="flex flex-col gap-10 justify-start items-center">
      <h1 className="text-5xl">Choose Your Skip Size</h1>
      <h2 className="text-xl opacity-50">
        Select the skip size that best suits your needs
      </h2>
      <SkipsContainer />
    </section>
  );
};
export default ChooseNextSkipPage;
