
import './App.css';

import Header from "./components/Header/Header"
import WayToTeach from "./components/WayToTeach/WayToTeach"
import Button from "./components/Button/Button"
import { ways } from "./data"


function App() {
    function handleClick(type) {
        console.log(type);
    }
    return (
        <div>
          <Header/>
          <main>
            <section>
              <h1>P !!</h1>
              <ul>
                  <WayToTeach {... ways[0]}/>
                  <WayToTeach {... ways[1]}/>
                  <WayToTeach {... ways[2]}/>
                  <WayToTeach {... ways[3]}/>
                  <WayToTeach {... ways[4]}/>
                  <WayToTeach {... ways[5]}/>
                  <WayToTeach {... ways[6]}/>
                  <WayToTeach {... ways[7]}/>
              </ul>

            </section>
            <section>
                <h3>...ways to touch</h3>
                <Button text={"touch 1"} onClick={() => handleClick(ways[0].title)}>1</Button>
                <Button text={"touch 2"} onClick={() => handleClick(ways[1].title)}>2</Button>
                <Button text={"touch 3"} onClick={() => handleClick(ways[2].title)}>3</Button>
                <Button text={"touch 4"} onClick={() => handleClick(ways[3].title)}>4</Button>
                <Button text={"touch 5"} onClick={() => handleClick(ways[4].title)}>5</Button>
                <Button text={"touch 6"} onClick={() => handleClick(ways[5].title)}>6</Button>
                <Button text={"touch 7"} onClick={() => handleClick(ways[6].title)}>7</Button>
                <Button text={"touch 8"} onClick={() => handleClick(ways[7].title)}>8</Button>
            </section>
          </main>

        </div>
    );
}

export default App;