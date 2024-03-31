import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const content = [
    {title: "html", text: "html"},
    { title: "css", text: "css"},
    {title: "js", text: "js"}
]

export default function App() {
    const [active, setActive] = useState(null);
    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className={"Main"}>
            <p className={"content"}>
            <section>
            <ul>
            {content.map((item, index) => (
                <li
                    key={item.title}
                    onClick={() => setActive(index)}
                    className={index === active ? "active" : null}
                >
                    <h3>{item.title}</h3>
                    <div className="content">{item.text}</div>
                </li>
            ))}
            </ul>
            </section>
            </p>
        </div>
        </div>
  );
}
