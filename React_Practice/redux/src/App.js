import "./App.css";
import Counter from "./features/counter/Counter";
import Functions from "./functionalProgramming/Functions";
import Immuteable from "./functionalProgramming/Immuteable";
import LoDash from "./functionalProgramming/LoDash";

function App() {
  return (
    <div className="App">
      {/* <Functions/>
     <LoDash/>
     <Immuteable/> */}
      <main>
        <Counter />
      </main>
    </div>
  );
}

export default App;
