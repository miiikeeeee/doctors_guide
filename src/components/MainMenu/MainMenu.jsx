import { LANDS_INFO } from "../../constants/lands";
import {
   choose_region_text,
   languagesMainMenu,
   main_menu_items,
} from "../../constants/translation/main_menu";
import "./main_menu.css";

const MainMenu = ({ language, storedRegion, redirectToRefionPage }) => {
   const returnLandDesc = () => {
      const desc = LANDS_INFO?.find((land) => land?.name === storedRegion)
         ?.desc[language];

      console.log(LANDS_INFO?.filter((land) => land?.name === storedRegion));

      if (desc) {
         return desc;
      } else return desc;
   };

   console.log(LANDS_INFO?.find(
      (land) =>
         land?.name === storedRegion
   )?.main_link);

   return (
      <div className={"main_menu_wrapper"}>
         {!storedRegion && (
            <div className={"main_menu_text__wrapper"}>
               <div>{languagesMainMenu[language]?.firstSent}</div>
               {languagesMainMenu[language]?.mainText
                  .split("\n")
                  .map((sentence, index) => (
                     <div className={"sentence"} key={index}>
                        {sentence}
                     </div>
                  ))}
            </div>
         )}

         {storedRegion && (
            <div className="main_menu_text__wrapper">{returnLandDesc()}</div>
         )}

         <div className={"main_menu__sections"}>
            {main_menu_items?.sections
               ?.sort((a, b) => a?.order - b?.order)
               ?.map((section, sectionIndex) => (
                  <div className="main_menu__section" key={sectionIndex}>
                     <img
                        className={"main_menu__settion_icon"}
                        src={section.icon}
                        alt=""
                     />

                     <div>
                        <div className="main_menu_section_title">
                           {section.title[language]}
                        </div>

                        {section.items.map((item, optionIdex) => {
                           if (
                              sectionIndex === 2 &&
                              optionIdex !== 0 &&
                              !storedRegion
                           ) {
                              return (
                                 <div className={"wrapper_with_choose"}>
                                    <a
                                       className={
                                          "main_menu_section_link disabled"
                                       }
                                       href={item?.link}
                                       target="_blank"
                                       key={optionIdex}
                                    >
                                       <div>{item[language]}</div>
                                    </a>
                                    <a
                                       onClick={redirectToRefionPage}
                                       className={"choose_region_link"}
                                    >
                                       {choose_region_text[language]}
                                    </a>
                                 </div>
                              );
                           }
                           if (
                              sectionIndex === 1 &&
                              optionIdex > 1 &&
                              !storedRegion
                           ) {
                              return (
                                 <div className={"wrapper_with_choose"}>
                                    <a
                                       className={
                                          "main_menu_section_link disabled"
                                       }
                                       href={item?.link}
                                       target="_blank"
                                       key={optionIdex}
                                    >
                                       <div>{item[language]}</div>
                                    </a>
                                    <a
                                       onClick={redirectToRefionPage}
                                       className={"choose_region_link2"}
                                    >
                                       {choose_region_text[language]}
                                    </a>
                                 </div>
                              );
                           }
                           if (
                              sectionIndex === 3 &&
                              optionIdex === 6 &&
                              !storedRegion
                           ) {
                              return (
                                 <div className={"wrapper_with_choose"}>
                                    <a
                                       className={
                                          "main_menu_section_link disabled"
                                       }
                                       href={item?.link}
                                       target="_blank"
                                       key={optionIdex}
                                    >
                                       <div>{item[language]}</div>
                                    </a>
                                    <a
                                       onClick={redirectToRefionPage}
                                       className={"choose_region_link2"}
                                    >
                                       {choose_region_text[language]}
                                    </a>
                                 </div>
                              );
                           }

                           if (
                              sectionIndex === 1 &&
                              optionIdex === 1 &&
                              storedRegion
                           ) {
                              return (
                                 <div className={"wrapper_with_choose"}>
                                    <a
                                       className={
                                          "main_menu_section_link"
                                       }
                                       href={
                                          LANDS_INFO?.find(
                                             (land) =>
                                                land?.name === storedRegion
                                          )?.main_link
                                       }
                                       target="_blank"
                                       key={optionIdex}
                                    >
                                       <div>{item[language]}</div>
                                    </a>
                                 </div>
                              );
                           }

                           return (
                              <a
                                 className={"main_menu_section_link"}
                                 href={item?.link}
                                 target="_blank"
                                 key={optionIdex}
                              >
                                 <div>{item[language]}</div>
                              </a>
                           );
                        })}
                     </div>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default MainMenu;
