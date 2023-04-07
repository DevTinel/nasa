import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <main>
      <section className={styles.containerHome}>
        <div>
          <h1>
            SO, YOU WANT TO TRAVEL TO <span>SPACE</span>
          </h1>
          <p>
            Let's face it;if you want to go to space,you might as well genuinely
            go to outer space and not hover kind of on the edge of it.Well sit
            back,and relax because we'll give you a truly out of this world
            experience!
          </p>
        </div>
        <div>
          <div className={styles.explore}>
            <p>EXPLORE</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
