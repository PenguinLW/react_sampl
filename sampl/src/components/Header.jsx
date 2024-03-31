import logo from '../logo.svg';


export default function Header() {
  const now = new Date();

  return (
      <header className={"App-header"}>
          <img src={logo} alt={"PenguinLW"} className={"App-logo"}/>
          <h3>PenguinLW</h3>
          <span>{now.toLocaleDateString() + "; " +now.toLocaleTimeString()}</span>
      </header>
  )
}