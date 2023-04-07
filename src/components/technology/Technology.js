import React from "react";
import styles from "./Technology.module.css";
import Vehicle from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import Vehicle2 from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import SpaceCapsule from "../../assets/technology/image-space-capsule-portrait.jpg";
import Spaceport from "../../assets/technology/image-spaceport-portrait.jpg";
import { useState } from "react";

const Technology = () => {
  const [title, setTitle] = useState("SPACE CAPSULE");
  const [paragraph, setParagraph] = useState(
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  );
  const [img, setImg] = useState(SpaceCapsule);
  const [selected, setSelected] = useState(1);
  const handleClick = (id) => {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };
  return (
    <section className={styles.technologyContainer}>
      <div className={styles.containerPrincipal}>
        <div className={styles.title}>
          <span>03</span>
          <h1>SPACE LAUNCH 101</h1>
        </div>
        <div className={styles.containerItems}>
          <div className={styles.divResponsive}>
            <div className={styles.containerSpans}>
              <span
                className={selected === 1 ? styles.selected : ""}
                onClick={() => {
                  handleClick(1);
                  setImg(Vehicle);
                  setTitle("LAUNCH VEHICLE");
                  setParagraph(
                    `A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!`
                  );
                }}
              >
                1
              </span>
              <span
                className={selected === 2 ? styles.selected : ""}
                onClick={() => {
                  handleClick(2);

                  setImg(Spaceport);
                  setTitle("SPACEPORT");
                  setParagraph(
                    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                  );
                }}
              >
                2
              </span>
              <span
                className={selected === 3 ? styles.selected : ""}
                onClick={() => {
                  handleClick(3);

                  setImg(SpaceCapsule);
                  setTitle("SPACE CAPSULE");
                  setParagraph(
                    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                  );
                }}
              >
                3
              </span>
            </div>
            <div className={styles.containerAbout}>
              <span>THE TERMINOLOGY...</span>
              <h1>{title}</h1>
              <p>{paragraph}</p>
            </div>
          </div>
          <img src={img} alt="Nave Vehicle" />
        </div>
      </div>
    </section>
  );
};

export default Technology;
