import React, { useState } from "react";
import styles from "./Destination.module.css";
import Mars from "../../assets/destination/image-mars.png";
import "../../App.css";
import Moon from "../../assets/destination/image-moon.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";

const Destination = () => {
  const [selectedOption, setSelectedOption] = useState("moon");
  const [clicado, setClicado] = useState(Moon);
  const [paragrafo, setParagrafo] = useState(
    ` See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites`
  );
  const [title, setTitle] = useState("MOON");
  const [km, setKm] = useState("384,400 KM");
  const [days, setDays] = useState("3 days");
  return (
    <section className={styles.destinationContainer}>
      <div className={styles.title}>
        <span>01</span>
        <h1>PICK YOUR DESTINATION</h1>
      </div>
      <div className={styles.about}>
        <div>
          <img className={styles.imgMars} src={clicado} alt="Marte" />
        </div>
        <div className={styles.marsContainer}>
          <div className={styles.celestialsBodies}>
            <form>
              <label>
                <input
                  type="radio"
                  value="moon"
                  checked={selectedOption === "moon"}
                  onChange={() => setSelectedOption("moon")}
                  onClick={() => {
                    setParagrafo(
                      `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites!`
                    );
                    setClicado(Moon);
                    setTitle("MOON");
                    setDays(" 3 days");
                  }}
                />
                {title}
              </label>
              <label>
                <input
                  type="radio"
                  value="mars"
                  checked={selectedOption === "mars"}
                  onChange={() => setSelectedOption("mars")}
                  onClick={() => {
                    setParagrafo(
                      `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`
                    );
                    setClicado(Mars);
                    setTitle("MARS");
                    setKm("225 MIL. KM");
                    setDays("9 MONTHS");
                  }}
                />
                MARS
              </label>
              <label>
                <input
                  type="radio"
                  value="europa"
                  checked={selectedOption === "europa"}
                  onChange={() => setSelectedOption("europa")}
                  onClick={() => {
                    setParagrafo(
                      `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin`
                    );
                    setClicado(Europa);
                    setTitle("EUROPA");
                    setKm("628 MIL. KM");
                    setDays("3 YEARS");
                  }}
                />
                EUROPA
              </label>
              <label>
                <input
                  type="radio"
                  value="titan"
                  checked={selectedOption === "titan"}
                  onChange={() => setSelectedOption("titan")}
                  onClick={() => {
                    setParagrafo(
                      `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`
                    );
                    setClicado(Titan);
                    setTitle("TITAN");
                    setKm("1.6 bil. KM");
                    setDays("7 YEARS");
                  }}
                />
                TITAN
              </label>
            </form>
          </div>
          <h1>{title}</h1>
          <p className={styles.aboutMars}>{paragrafo}</p>
          <div className={styles.distanceMonths}>
            <div>
              <p>AVG. DISTANCE</p>
              <span>{km}</span>
            </div>
            <div>
              <p>EST. TRAVEL TIME</p>
              <span>{days}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
