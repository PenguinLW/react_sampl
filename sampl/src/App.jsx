
import './App.css';

import Header from "./components/Header"

function WayToTeach() {
    return (
        <li>
            <p>
                <strong>text 1</strong>
                text 2
            </p>
        </li>
    )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section>
          <h1>P !!</h1>

          <WayToTeach/>

        </section>
      </main>

    </div>
  );
}

export default App;