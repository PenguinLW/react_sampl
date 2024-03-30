import logo from '../logo.svg';


export default function Header() {
  const now = new Date();

  return (
      <header>
          <img src={logo} alt={"PenguinLW"}/>
          <h3>PenguinLW</h3>
          <span>{now.toLocaleDateString() + "; " +now.toLocaleTimeString()}</span>
      </header>
  )
}