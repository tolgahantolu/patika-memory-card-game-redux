import { useSelector } from "react-redux";
import { Playground } from "./components";

function App() {
  const score = useSelector((state) => state.card.score);
  console.log(score);
  return (
    <div id="app" className="w-2/3 h-auto mx-auto mt-10 rounded-lg p-5">
      <span className="absolute top-10 right-5 rounded-lg bg-slate-400 text-white font-bold text-xl w-16 h-12 p-2 grid place-items-center">
        {score}
      </span>
      <Playground />
    </div>
  );
}

export default App;
