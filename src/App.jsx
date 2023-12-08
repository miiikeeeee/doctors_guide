import { useState, useEffect } from "react";
import { languages } from "./constants/translation";
import "./App.css";
import GermanyMap from "./components/GermanyMap/GermanyMap";
import ApplicationApprovalChecklist from "./components/Approval/ThirdStep";
import Header from "./components/Header/Header";

function App() {
   const storedPage = localStorage.getItem("currentPage");
   const initialPage = storedPage ? parseInt(storedPage, 10) : 1;
   const storedLanguage = localStorage.getItem("selectedLanguage");
   const initialLanguage = storedLanguage ? storedLanguage : "de";
   const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);
   const [currentPage, setCurrentPage] = useState(initialPage);

   const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
   };

   const handleChangeLanguage = (event) => {
      const newLanguage = event.target.value;
      setSelectedLanguage(newLanguage);
      localStorage.setItem("selectedLanguage", newLanguage);
   };

   const handlePrevPage = () => {
      setCurrentPage(currentPage - 1);
   };

   useEffect(() => {
      localStorage.setItem("currentPage", currentPage);
      window.scrollTo(0, 0);
   }, [currentPage]);
  

   return (
      <div className="App">
         {/* Header */}
         <Header
            handleChangeLanguage={handleChangeLanguage}
            selectedLanguage={selectedLanguage}
         />

         {/* Content */}
         <div className="content">
            {currentPage === 1 && (
               <div className="page page1">
                  <div className="firstPageImageBlock"></div>
                  <div className="containerSmall firstPageContent">
                     <h1>{languages[selectedLanguage].welcome}</h1>
                     <ul className="req">
                        <h2>
                           {languages[selectedLanguage].requirements.title}
                        </h2>
                        <li>
                           {
                              languages[selectedLanguage].requirements
                                 .medEducation
                           }
                        </li>
                        <li>{languages[selectedLanguage].requirements.aip}</li>
                        <li>
                           {languages[selectedLanguage].requirements.license}
                        </li>
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
               </div>
            )}

            {currentPage === 2 && (
               <div className="page page2">
                  {/* Second page content */}
                  <h2 className="mt-20">{languages[selectedLanguage].choose_region}</h2>

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
               <div className="page containerSmall mt-20">
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
