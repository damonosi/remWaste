import "./App.css";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import ChooseNextSkipPage from "./pages/ChooseNextSkip/ChooseNextSkipPage";
import Provider from "./utils/Providers";

function App() {
  return (
    <div className="min-h-screen w-screen flex  justify-center bg-[#121212]">
      <Provider>
        <div className="flex flex-col w-full gap-10 px-4 py-8 max-w-7xl">
          <StepIndicator />
          <ChooseNextSkipPage />
        </div>
      </Provider>
    </div>
  );
}

export default App;
