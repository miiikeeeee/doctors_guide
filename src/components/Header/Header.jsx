import { languageFlags, languages } from "../../constants/translation";
import './header.css';


const Header = ({ selectedLanguage, handleChangeLanguage }) => {
   return (
      <header className="header flexBt">
         <h2 className="upcase mainLogo">Germanmove</h2>
         <div className="flexBt">
            <span style={{ marginRight: "20px" }}>
               {languages[selectedLanguage].language}
            </span>
            <select className="langSelect" value={selectedLanguage} onChange={handleChangeLanguage}>
               {languages[selectedLanguage].options.map((option) => (
                  <option key={option.value} value={option.value}>
                     {languageFlags[option.value]} {option.label}
                  </option>
               ))}
            </select>
         </div>
      </header>
   );
};

export default Header;
