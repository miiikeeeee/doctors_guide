import { useState, useEffect} from "react";

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

   const handleRegionClick = (e) => {
      setSelectedRegion(e.target.value);
   };

   useEffect(() => {
      if (selectedRegion) {
        localStorage.setItem("selectedRegion", selectedRegion);
      } else {
        localStorage.removeItem("selectedRegion");
      }
    }, [selectedRegion]);

   const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

   return (
      <div style={{ width: "100%", height: "300px" }}>
         <select
            id="bundeslandAuswahl"
            onChange={handleRegionClick}
            value={selectedRegion}
         >
            <option value="">Select a Region</option>
            {regions.map((region, index) => (
               <option key={index} value={region}>
                  {region}
               </option>
            ))}
         </select>
         <p style={{fontSize: '20px'}}>Selected Region:</p>
         <div style={{color: randomColor, fontSize: '25px'}}>{selectedRegion && <p> {selectedRegion}</p>}</div>
      </div>
   );
};

export default GermanyMap;
