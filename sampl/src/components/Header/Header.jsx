import logo from "../../logo.svg";
import { useState } from "react"


export default function Header() {
    const [datetime, setDateTime] = useState(new Date());

    setInterval( () => {
        setDateTime(new Date());
        },
        1000
    );

    return (
      <header className={"App-header"}>
          <img src={logo} alt={"PenguinLW"} className={"App-logo"}/>
          <h3>PenguinLW</h3>
          <span>{datetime.toLocaleDateString() + " " +datetime.toLocaleTimeString()}</span>
      </header>
    )
}