import {intros} from "../../data";

export default function IntroSectionNone() {
    return (
        <section>
            {Object.keys(intros).map(
                (intro) => (
                    <h3 className="centered" key={intros[intro]} style={{color: "#666"}}>
                        {intros[intro]}
                    </h3>
                )
            )}
        </section>
)}