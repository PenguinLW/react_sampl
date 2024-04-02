import { Fragment } from "react"

import "./App.css";


import Header from "./components/Header/Header"
import TeachingSection from "./components/TeachingSection/TeachingSection"
import DifferencesSection from "./components/DifferencesSection/DifferencesSection"
import IntroSection from "./components/IntroSection/IntroSection"
import IntroSectionNone from "./components/IntroSection/IntroSectionNone"


function App() {
    return (
        <Fragment>
          <Header/>
            <main>
                <IntroSectionNone/>
                <TeachingSection/>
                <DifferencesSection/>
            </main>

        </Fragment>
    );
}

export default App;