import { useState, useEffect } from "react";
import { languageFlags, languages } from "./constants/translation";
import "./App.css";
import GermanyMap from "./components/GermanyMap/GermanyMap";
import ApplicationApprovalChecklist from "./components/Approval/ThirdStep";
import germany from '../assets/germany.jpg';

function App() {
   const storedPage = localStorage.getItem("currentPage");
   const initialPage = storedPage ? parseInt(storedPage, 10) : 1
   const storedLanguage = localStorage.getItem("selectedLanguage");
   const initialLanguage = storedLanguage ? storedLanguage : "de";
   const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
   const [currentPage, setCurrentPage] = useState(initialPage);

   const handleChangeLanguage = (event) => {
      const newLanguage = event.target.value;
      setSelectedLanguage(newLanguage);
      localStorage.setItem("selectedLanguage", newLanguage);
    };

   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
   };

   const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
   };

   useEffect(() => {
      localStorage.setItem("currentPage", currentPage);
    }, [currentPage]);

   return (
      <div className="App">
         {/* Header */}
         <header className="header">
            <h1>{languages[selectedLanguage].app_name}</h1>
            <div>
               <span style={{ marginRight: "20px" }}>
                  {languages[selectedLanguage].language}
               </span>
               <select value={selectedLanguage} onChange={handleChangeLanguage}>
                  {languages[selectedLanguage].options.map((option) => (
                     <option key={option.value} value={option.value}>
                       {languageFlags[option.value]} {option.label}
                     </option>
                  ))}
               </select>
            </div>
         </header>
        
         <p style={{textAlign: 'left'}}>Page: {currentPage}</p>

         {/* Content */}
         <div className="content">
            {currentPage === 1 && (
               <div className="page">
                  <h1>{languages[selectedLanguage].welcome}</h1>
                  <ul className="req">
                     <h2>{languages[selectedLanguage].requirements.title}</h2>
                     <li>
                        {languages[selectedLanguage].requirements.medEducation}
                     </li>
                     <li>{languages[selectedLanguage].requirements.aip}</li>
                     <li>{languages[selectedLanguage].requirements.license}</li>
                     <li>
                        {
                           languages[selectedLanguage].requirements
                              .languageSkills
                        }
                     </li>
                     <p>{languages[selectedLanguage].requirements.note}</p>
                  </ul>
                  <button onClick={handleNextPage}>
                     {languages[selectedLanguage].next}
                  </button>
               </div>
            )}

            {currentPage === 2 && (
               <div className="page">
                  {/* Second page content */}
                  <h2>{languages[selectedLanguage].choose_region}</h2>
                  <img style={{objectFit: "cover", width: '100%', maxWidth: '500px', height: "400px"}} src={germany} alt="" />

                  <GermanyMap />
                  <button onClick={handlePrevPage}>
                     {languages[selectedLanguage].back}
                  </button>

                  <button onClick={handleNextPage}>
                     {languages[selectedLanguage].continue}
                  </button>
               </div>
            )}

            {currentPage === 3 && (
               <div className="page">
                  {/* Third page content */}
                  <ApplicationApprovalChecklist language={selectedLanguage} />
                  <button onClick={handlePrevPage}>
                     {languages[selectedLanguage].back}
                  </button>
               </div>
            )}
         </div>
      </div>
   );
}

export default App;
