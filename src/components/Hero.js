import "../styles/Hero.scss";
import {Button} from "./Button";

export const Hero = () => {
    return (
        <section className="hero">
            <div className="wrap-center">
                <h1 className="title">Test assignment for front-end developer</h1>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast
                    understanding of User design thinking as they'll be building web interfaces with accessibility in mind.
                    They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <Button>Sign Up</Button>
            </div>
        </section>
    )
}