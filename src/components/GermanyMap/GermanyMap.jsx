import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";

import { statesData } from "./data";

const regions = [
   "Baden-Württemberg",
   "Bayern",
   "Berlin",
   "Brandenburg",
   "Bremen",
   "Hamburg",
   "Hessen",
   "Mecklenburg-Vorpommern",
   "Niedersachsen",
   "Nordrhein-Westfalen",
   "Rheinland-Pfalz",
   "Saarland",
   "Sachsen",
   "Sachsen-Anhalt",
   "Schleswig-Holstein",
   "Thüringen",
];

const GermanyMap = () => {
   const storedRegion = localStorage.getItem("selectedRegion");
   const initialRegion = storedRegion ? storedRegion : null;
   const [selectedRegion, setSelectedRegion] = useState(initialRegion);
   const [clickedState, setClickedState] = useState({});

   const handleRegionClick = (e) => {
      const regionName = e.target.options.name;
      const newClickedState = {};

      // Unselect all regions
      Object.keys(clickedState).forEach((key) => {
         newClickedState[key] = false;
      });

      // Select the clicked region
      newClickedState[regionName] = true;

      // Set the new clicked state and update the selected region
      setClickedState(newClickedState);
      setSelectedRegion(regionName);
   };

   const handleRegionChoose = (e) => {
      setSelectedRegion(e.target.value);
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
     setClickedState({ [storedRegion]: true });
     setSelectedRegion(storedRegion);
   }
 }, []);

   const center = [51.1657, 10.4515];
   return (
      <div>
         <MapContainer
            center={center}
            zoom={5}
            style={{ width: "100%", height: "50vh" }}
         >
            <TileLayer
               url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=5sO1hpTNMVYZUoDzY8gO"
               attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {statesData.features.map((state, idx) => {
               const coordinates = state.geometry.coordinates[0].map((item) => [
                  item[1],
                  item[0],
               ]);
               const regionName = state.properties.name;

               return (
                  <Polygon
                     key={idx}
                     pathOptions={{
                        fillColor: clickedState[regionName]
                           ? "#BD0026"
                           : "#FD8D3C",
                        fillOpacity: 0.7,
                        weight: 2,
                        opacity: 1,
                        dashArray: 3,
                        color: "white",
                     }}
                     positions={coordinates}
                     eventHandlers={{
                        click: handleRegionClick,
                        mouseover: (e) => {
                           const layer = e.target;
                           layer.setStyle({
                              dashArray: "",
                              fillColor: "#BD0026",
                              fillOpacity: 0.7,
                              weight: 2,
                              opacity: 1,
                              color: "white",
                           });
                        },
                        mouseout: (e) => {
                           const layer = e.target;
                           layer.setStyle({
                              fillOpacity: 0.7,
                              weight: 2,
                              dashArray: "3",
                              color: "white",
                              fillColor: clickedState[regionName]
                                 ? "#BD0026"
                                 : "#FD8D3C",
                           });
                        },
                     }}
                     name={regionName}
                  />
               );
            })}
         </MapContainer>
         <select
            id="bundeslandAuswahl"
            onChange={handleRegionChoose}
            value={selectedRegion}
         >
            <option value="">Select a Region</option>
            {regions.map((region, index) => (
               <option key={index} value={region}>
                  {region}
               </option>
            ))}
         </select>
         <div style={{ width: "100%" }}>
            <p style={{ fontSize: "20px" }}>Selected Region:</p>
            <div style={{ color: "#BD0026", fontSize: "25px" }}>
               {selectedRegion && <p> {selectedRegion}</p>}
            </div>
         </div>
      </div>
   );
};

export default GermanyMap;
