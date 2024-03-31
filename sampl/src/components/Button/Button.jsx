import "./Button.css"


export default function Button({children, text, onClick, isActive}) {
    return <button className={isActive ? "button active" : "button"} onClick={onClick}>{text +"-"+children}</button>
}