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
   return (
      <div className="checklist-container">
         <h2>{applicationTitle}</h2>

         <h3>{applicationSubtitle}</h3>
         <ul>
            <li>
               <input type="checkbox" className="checkbox" /> {citizenshipInfo}
            </li>
            <li>
               <input type="checkbox" className="checkbox" />{" "}
               {residencePermitInfo}
            </li>
            <li>
               <input type="checkbox" className="checkbox" />{" "}
               {residenceOutsideInfo}
            </li>
         </ul>

         <h3>{approvalProcessTitle}</h3>
         <ol>
            <li>
               <input type="checkbox" className="checkbox" /> {germanSkillsInfo}
            </li>
            <li>
               <input type="checkbox" className="checkbox" />{" "}
               {collectDocumentsInfo}
            </li>
            <li>
               <input type="checkbox" className="checkbox" /> {fillFormsInfo}
            </li>
            <li>
               <input type="checkbox" className="checkbox" />{" "}
               {checkRequirementsInfo}
            </li>
            <li>
               <input type="checkbox" className="checkbox" /> {registerFSPInfo}
            </li>
            <li>
               <input type="checkbox" className="checkbox" />{" "}
               {professionalLicenseInfo}
            </li>
            <li>
               <input type="checkbox" className="checkbox" />{" "}
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
