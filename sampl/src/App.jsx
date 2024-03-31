
import "./App.css";

import { useState } from "react"

import Header from "./components/Header/Header"
import WayToTeach from "./components/WayToTeach/WayToTeach"
import Button from "./components/Button/Button"
import { ways, differences } from "./data"


function App() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type);
    }
    return (
        <div>
          <Header/>
          <main>
            <section>
              <h1>P !!</h1>
              <ul>
                  {ways.map(
                      (way) => (<WayToTeach key={way.title} {... way}/>)
                  )}
              </ul>

            </section>
            <section>
                <h3>...ways to touch</h3>
                {/*{differences.map(*/}
                    {/*(difference) => (*/}
                        {/*<Button key={difference}*/}
                                {/*isActive={contentType === difference}*/}
                                {/*onClick={() => handleClick(difference)}*/}
                                {/*text={difference}*/}
                        {/*>{difference}</Button>*/}
                    {/*)*/}
                {/*)}*/}
                <Button isActive={contentType === differences.way} onClick={() => handleClick(differences.way)} text={differences.way}>{differences.way}</Button>
                <Button isActive={contentType === differences.easy} onClick={() => handleClick(differences.easy)} text={differences.easy}>{differences.easy}</Button>
                <Button isActive={contentType === differences.programm} onClick={() => handleClick(differences.programm)} text={differences.programm}>{differences.programm}</Button>
                <p>{contentType ? differences[contentType] : "Touch on touched .."}</p>
            </section>
          </main>

        </div>
    );
}

export default App;