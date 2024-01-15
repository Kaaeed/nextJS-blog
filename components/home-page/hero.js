import Image from "next/image";
import classes from "./hero.module.css";
import milkyWayImage from "../../public/images/site/milky-way.png";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src={milkyWayImage} alt="An image showing milky way" />
      </div>
      <h1>Hi, I'm Adam</h1>
      <p>Welcome to my blog, lorem ipsum...</p>
    </section>
  );
}

export default Hero;
