
import './App.css';

import Header from "./components/Header"
import WayToTeach from "./components/WayToTeach"
import { ways } from "./data"


function App() {
  return (
    <div>
      <Header/>
      <main>
        <section>
          <h1>P !!</h1>
          <WayToTeach {... ways[0]}/>
          <WayToTeach {... ways[1]}/>
          <WayToTeach {... ways[2]}/>
          <WayToTeach {... ways[3]}/>
          <WayToTeach {... ways[4]}/>
          <WayToTeach {... ways[5]}/>
          <WayToTeach {... ways[6]}/>
          <WayToTeach {... ways[7]}/>

        </section>
      </main>

    </div>
  );
}

export default App;