import { Fragment } from "react"

import "./App.css";


import Header from "./components/Header/Header"
import TeachingSection from "./components/TeachingSection/TeachingSection"
import DifferencesSection from "./components/DifferencesSection/DifferencesSection"


function App() {
    return (
        <Fragment>
          <Header/>
            <main>
                <TeachingSection/>
                <DifferencesSection/>
            </main>

        </Fragment>
    );
}

export default App;