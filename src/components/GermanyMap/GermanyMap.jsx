import { useState, useEffect } from "react";
import "./map.css";
// const regions = [
//    "Baden-Württemberg",
//    "Bayern",
//    "Berlin",
//    "Brandenburg",
//    "Bremen",
//    "Hamburg",
//    "Hessen",
//    "Mecklenburg-Vorpommern",
//    "Niedersachsen",
//    "Nordrhein-Westfalen",
//    "Rheinland-Pfalz",
//    "Saarland",
//    "Sachsen",
//    "Sachsen-Anhalt",
//    "Schleswig-Holstein",
//    "Thüringen",
// ];

import state1 from "../../assets/states/Baden-W.svg";
import state2 from "../../assets/states/Brandenburg.svg";
import state3 from "../../assets/states/MecklenburgVorpommern.svg";
import state4 from "../../assets/states/Niedersachsen.svg";
import state5 from "../../assets/states/NRW.svg";
import state6 from "../../assets/states/Saarland.svg";
import state7 from "../../assets/states/Sachsen-Anhalt.svg";
import state8 from "../../assets/states/Sachsen.svg";
import state9 from "../../assets/states/Thüringen.svg";
import state10 from "../../assets/states/Schleswig-Holstein.svg";
import state11 from "../../assets/states/Thüringen.svg";
import state12 from "../../assets/states/Rheinland-Pfalz.svg";
import state13 from "../../assets/states/Bayern.svg";
import state14 from "../../assets/states/Berlin.svg";
import state15 from "../../assets/states/Bremen.svg";
import state16 from "../../assets/states/Hessen.svg";

// Individual state component
const StateComponent = ({ id, idx, name, img, x, y, onClick }) => {
   // Import SVG dynamically using require
   return (
      <div
         style={{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            width: "100%", // Adjust as needed based on your design
            height: "100%", // Adjust as needed based on your design
         }}
         className="map_item"
      >
         <span onClick={() => onClick(name)} className={`state_${idx}`}>
            {name}
         </span>
         <img
            id={id}
            src={img}
            alt={name}
            style={{
               width: "100%", // Maintain the original width of the image
               height: "100%", // Maintain the original height of the image
               objectFit: "cover",
            }}
         />
      </div>
   );
};

const germanyStates = [
   {
      id: "BadenW",
      name: "Baden-Württemberg",
      img: state1,
      x: 68,
      y: 128,
   },
   {
      id: "Brandenburg",
      name: "Brandenburg",
      img: state2,
      x: 0,
      y: 40,
   },
   {
      id: "MecklenburgVorpommern",
      name: "Mecklenburg Vorpommern",
      img: state3,
      x: 0,
      y: 40,
   },
   {
      id: "Niedersachsen",
      name: "Niedersachsen",
      img: state4,
      x: 0,
      y: 40,
   },
   {
      id: "NRW",
      name: "Nordrhein-Westfalen",
      img: state5,
      x: 0,
      y: 40,
   },
   {
      id: "Saarland",
      name: "Saarland",
      img: state6,
      x: -30,
      y: 50,
   },
   {
      id: "SachsenAnhalt",
      name: "Sachsen-Anhalt",
      img: state7,
      x: 0,
      y: 40,
   },
   {
      id: "Sachsen",
      name: "Sachsen",
      img: state8,
      x: 0,
      y: 40,
   },
   {
      id: "test",
      name: "Thüringen",
      img: state9,
      x: 0,
      y: 40,
   },
   {
      id: "SchleswigHolstein",
      name: "Schleswig-Holstein",
      img: state10,
      x: 0,
      y: 40,
   },
   {
      id: "Thueringen",
      name: "Thüringen",
      img: state11,
      x: 0,
      y: 40,
   },
   {
      id: "RheinlandPfalz",
      name: "Rheinland-Pfalz",
      img: state12,
      x: -45,
      y: 58,
   },
   { id: "Bayern", name: "Bayern", img: state13, x: 0, y: 40 },
   { id: "Berlin", name: "Berlin", img: state14, x: 0, y: 40 },
   { id: "Bremen", name: "Bremen", img: state15, x: 0, y: 40 },
   { id: "Hessen", name: "Hessen", img: state16, x: 0, y: 40 },
];

const GermanyMap = () => {
   const storedRegion = localStorage.getItem("selectedRegion");
   const initialRegion = storedRegion ? storedRegion : null;
   const [selectedRegion, setSelectedRegion] = useState(initialRegion);

   const handleRegionChoose = (region) => {
      setSelectedRegion(region);
   };

   useEffect(() => {
      if (selectedRegion) {
         localStorage.setItem("selectedRegion", selectedRegion);
      } else {
         localStorage.removeItem("selectedRegion");
      }
   }, [selectedRegion]);

   // Restore selected region from local storage on component mount
   useEffect(() => {
      const storedRegion = localStorage.getItem("selectedRegion");
      if (storedRegion) {
         setSelectedRegion(storedRegion);
      }
   }, []);

   return (
      <div className="mapContainer">
         <div className="selected">Selected State: {selectedRegion}</div>

         <div
            className="map"
            style={{
               position: "relative",
               overflow: "hidden",
               width: "100%",
               height: "750px",
            }}
         >
            {/* Render each state component dynamically */}
            {germanyStates.map((state, idx) => (
               <StateComponent
                  key={state.id}
                  id={state.id}
                  name={state.name}
                  img={state.img}
                  x={state.x}
                  y={state.y}
                  onClick={handleRegionChoose}
                  idx={idx}
               />
            ))}
         </div>
      </div>
   );
};

export default GermanyMap;
