import { ways } from "../../data";
import WayToTeach from "../../components/WayToTeach/WayToTeach"

export default function TeachingSection() {
    return (
        <section>
            <h1>P !!</h1>

            <ul>
                {ways.map(
                    (way) => (<WayToTeach key={way.title} {... way}/>)
                )}
            </ul>

        </section>
    )}