import "./App.css";
import Counter from "./features/counter/Counter";
import PostList from "./features/posts/PostList";
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
        <PostList />
      </main>
    </div>
  );
}

export default App;
