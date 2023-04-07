import React, { useState } from "react";
import styles from "./Crew.module.css";
import Douglas from "../../assets/crew/image-douglas-hurley.png";
import Mark from "../../assets/crew/image-mark-shuttleworth.png";
import Victor from "../../assets/crew/image-victor-glover.png";
import Anoushen from "../../assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const [image, setImage] = useState(Douglas);
  const [name, setName] = useState("DOUGLAS HURLEY");
  const [profission, setProfission] = useState("COMMANDER");
  const [paragraph, setParagraph] = useState(
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  );
  const [selected, setSelected] = useState(1);
  const handleClick = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <section className={styles.crewContainer}>
      <div>
        <div className={styles.crewTitle}>
          <span>02</span>
          <h1>MEET YOUR CREW</h1>
        </div>
        <h2>{profission}</h2>
        <h1 className={styles.nameH1}>{name}</h1>
        <p>{paragraph}</p>
        <div className={styles.spanDiv}>
          <span
            className={selected === 1 ? styles.selected : ""}
            onClick={() => {
              handleClick(1);
              setImage(Douglas);
              setName("DOUGLAS HURLEY");
              setProfission("COMMANDER");
              setParagraph(
                "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
              );
            }}
          ></span>
          <span
            className={selected === 2 ? styles.selected : ""}
            onClick={() => {
              handleClick(2);

              setImage(Mark);
              setName("MARK SHUTTLEWORTH");
              setProfission("MISSION SPECIALISTT");
              setParagraph(
                "Mark Shuttleworth Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
              );
            }}
          ></span>
          <span
            className={selected === 3 ? styles.selected : ""}
            onClick={() => {
              handleClick(3);
              setImage(Victor);
              setName("VICTOR GLOVER");
              setProfission("PILOT");
              setParagraph(
                "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
              );
            }}
          ></span>
          <span
            className={selected === 4 ? styles.selected : ""}
            onClick={() => {
              handleClick(4);
              setImage(Anoushen);
              setName("ANOUSHEH ANSARI");
              setProfission("FLIGHT ENGINNER");
              setParagraph(
                ` Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.`
              );
            }}
          ></span>
        </div>
      </div>
      <div>
        <img src={image} alt={name} />
      </div>
    </section>
  );
};

export default Crew;
