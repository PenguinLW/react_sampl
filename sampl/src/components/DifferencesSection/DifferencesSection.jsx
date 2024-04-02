import { useState } from "react"

import { differences } from "../../data";
import Button from "../../components/Button/Button"

export default function DifferencesSection() {
    const [contentType, setContentType] = useState(null);

    function handleClick(type) {
        setContentType(type);
    }
    return (
        <section>
            <h3>...ways to touch</h3>
            {Object.keys(differences).map(
                // (difference) => console.log(difference)
                (difference) => (
                    // alert(differences[difference])
                    <Button key={difference}
                            isActive={contentType === difference}
                            onClick={() => handleClick(difference)}
                            text={difference}
                    >{difference}</Button>
                )
            )}
            {/*<Button isActive={contentType === differences.way} onClick={() => handleClick(differences.way)} text={differences.way}>{differences.way}</Button>*/}
            {/*<Button isActive={contentType === differences.easy} onClick={() => handleClick(differences.easy)} text={differences.easy}>{differences.easy}</Button>*/}
            {/*<Button isActive={contentType === differences.programm} onClick={() => handleClick(differences.programm)} text={differences.programm}>{differences.programm}</Button>*/}
            <p>{contentType ? differences[contentType] : "Touch on touched .."}</p>
        </section>

    )}