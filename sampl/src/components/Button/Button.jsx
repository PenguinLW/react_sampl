import './Button.css'


export default function Button({children, text, onTouch}) {

    return <button className={"button active"} onClick={onTouch}>{text +""+children}</button>
}