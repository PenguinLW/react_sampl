import './Button.css'


export default function Button({children, text, onClick}) {
    return <button className={"button active"} onClick={onClick}>{text +""+children}</button>
}