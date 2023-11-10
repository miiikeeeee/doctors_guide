import React, { useState, useEffect } from "react";
import { thirdStepTranslation } from "../../constants/translation";

const ApplicationApprovalChecklist = ({ language }) => {
   const {
      applicationTitle,
      applicationSubtitle,
      citizenshipInfo,
      residencePermitInfo,
      residenceOutsideInfo,
      approvalProcessTitle,
      germanSkillsInfo,
      collectDocumentsInfo,
      fillFormsInfo,
      checkRequirementsInfo,
      registerFSPInfo,
      professionalLicenseInfo,
      approvalObtainInfo,
      note,
   } = thirdStepTranslation[language];

   // Load checkbox states from local storage or default to all unchecked
   const initialState = {
      citizenship: false,
      residencePermit: false,
      residenceOutside: false,
      germanSkills: false,
      collectDocuments: false,
      fillForms: false,
      checkRequirements: false,
      registerFSP: false,
      professionalLicense: false,
      approvalObtain: false,
   };

   const [checkboxStates, setCheckboxStates] = useState(() => {
      const savedCheckboxStates = JSON.parse(
         localStorage.getItem("checkboxStates")
      );
      return savedCheckboxStates || initialState;
   });

   useEffect(() => {
      // Save checkbox states to local storage whenever they change
      localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
   }, [checkboxStates]);

   const handleCheckboxChange = (checkboxName) => {
      setCheckboxStates((prevStates) => ({
         ...prevStates,
         [checkboxName]: !prevStates[checkboxName],
      }));
   };

   return (
      <div className="checklist-container">
         <h2>{applicationTitle}</h2>

         <h3>{applicationSubtitle}</h3>
         <ul>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.citizenship}
                  onChange={() => handleCheckboxChange("citizenship")}
               />{" "}
               {citizenshipInfo}
            </li>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.residencePermit}
                  onChange={() => handleCheckboxChange("residencePermit")}
               />{" "}
               {residencePermitInfo}
            </li>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.residenceOutside}
                  onChange={() => handleCheckboxChange("residenceOutside")}
               />{" "}
               {residenceOutsideInfo}
            </li>
         </ul>

         <h3>{approvalProcessTitle}</h3>
         <ol>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.germanSkills}
                  onChange={() => handleCheckboxChange("germanSkills")}
               />{" "}
               {germanSkillsInfo}
            </li>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.collectDocuments}
                  onChange={() => handleCheckboxChange("collectDocuments")}
               />{" "}
               {collectDocumentsInfo}
            </li>

            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.fillForms}
                  onChange={() => handleCheckboxChange("fillForms")}
               />{" "}
               {fillFormsInfo}
            </li>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.checkRequirements}
                  onChange={() => handleCheckboxChange("checkRequirements")}
               />{" "}
               {checkRequirementsInfo}
            </li>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.registerFSP}
                  onChange={() => handleCheckboxChange("registerFSP")}
               />{" "}
               {registerFSPInfo}
            </li>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.professionalLicense}
                  onChange={() => handleCheckboxChange("professionalLicense")}
               />{" "}
               {professionalLicenseInfo}
            </li>
            <li>
               <input
                  type="checkbox"
                  className="checkbox"
                  checked={checkboxStates.approvalObtain}
                  onChange={() => handleCheckboxChange("approvalObtain")}
               />{" "}
               {approvalObtainInfo}
            </li>
         </ol>

         <p>
            <strong>{note}</strong>
         </p>
      </div>
   );
};

export default ApplicationApprovalChecklist;
