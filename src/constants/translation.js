export const languageFlags = {
   de: "🇩🇪",
   en: "🇬🇧",
   uk: "🇺🇦",
   ru: "💩",
 };

export const languages = {
   de: {
      choose_region: "Bitte wählen Sie Ihr Bundesland:",
      welcome:
         "Herzlich willkommen in unserer App für Ärzte, die planen, nach Deutschland zu ziehen!",
      next: "Weiter",
      back: "Zurück",
      continue: "Fortfahren",
      language: "Sprache wählen:",
      options: [
         { value: "de", label: "Deutsch" },
         { value: "en", label: "English" },
         { value: "uk", label: "Українська" },
         { value: "ru", label: "Русский" },
      ],
      requirements: {
         title: "Voraussetzungen für die medizinische Anerkennung in Deutschland:",
         medEducation:
            "Medizinische Ausbildung: Abgeschlossenes Hochschulstudium der Medizin in der Ukraine. Es ist wünschenswert, dass die Ausbildung an der medizinischen Fakultät abgeschlossen wurde.",
         aip: "Arzt im Praktikum (AiP): Erfolgreich abgeschlossenes Arzt im Praktikum (AiP) in der Ukraine.",
         license:
            "Lizenz in der Ukraine: Berechtigung zur Ausübung ärztlicher Tätigkeiten in der Ukraine.",
         languageSkills:
            "Sprachkenntnisse: Aktuelles Zertifikat über Deutschkenntnisse auf dem Niveau B2.",
         note: "Hinweis: Diese Voraussetzungen sind allgemein, und konkrete Anforderungen können je nach Bundesland in Deutschland variieren. Es ist wichtig, die Aktualisierungen der Anforderungen zu verfolgen und die spezifischen Voraussetzungen auf den offiziellen Websites der Gesundheitsbehörden der Bundesländer zu überprüfen.",
      },
   },
   en: {
      app_name: "Doctor-App",
      choose_region: "Please choose your region:",
      welcome: "Welcome to our app for doctors planning to move to Germany!",
      next: "Next",
      back: "Back",
      continue: "Continue",
      language: "Select Language:",
      options: [
         { value: "de", label: "Deutsch" },
         { value: "en", label: "English" },
         { value: "uk", label: "Українська" },
         { value: "ru", label: "Русский" },
      ],
      requirements: {
         title: "Requirements for medical recognition in Germany:",
         medEducation:
            "Medical Education: Completed medical studies at a university in Ukraine. Completion of studies at the medical faculty is desirable.",
         aip: "Physician in Internship (AiP): Successfully completed Physician in Internship (AiP) in Ukraine.",
         license:
            "License in Ukraine: Authorization to practice medical activities in Ukraine.",
         languageSkills:
            "Language Skills: Current certificate of German language proficiency at level B2.",
         note: "Note: These requirements are general, and specific requirements may vary by federal state in Germany. It is important to follow updates and check the specific requirements on the official websites of the health authorities of the federal states.",
      },
   },
   uk: {
      choose_region: "Будь ласка, оберіть свою область:",
      welcome:
         "Ласкаво просимо до нашого додатку для лікарів, які планують переїхати до Німеччини!",
      next: "Далі",
      back: "Назад",
      continue: "Продовжити",
      language: "Обрати мову:",
      options: [
         { value: "de", label: "Deutsch" },
         { value: "en", label: "English" },
         { value: "uk", label: "Українська" },
         { value: "ru", label: "Русский" },
      ],
      requirements: {
         title: "Вимоги до медичного визнання в Німеччині:",
         medEducation:
            "Медична освіта: Закінчена медична освіта в університеті в Україні. Бажано закінчення навчання на медичному факультеті.",
         aip: "Лікар в інтернатурі (AiP): Успішно пройдена інтернатура лікаря (AiP) в Україні.",
         license:
            "Ліцензія в Україні: Дозвіл на здійснення медичної діяльності в Україні.",
         languageSkills:
            "Мовні навички: Поточний сертифікат з володіння німецькою мовою на рівні B2.",
         note: "Примітка: Ці вимоги є загальними, і конкретні вимоги можуть відрізнятися залежно від федеральної землі в Німеччині. Важливо слідкувати за оновленнями та перевіряти конкретні вимоги на офіційних веб-сайтах органів охорони здоров'я федеральних земель.",
      },
   },
   ru: {
      choose_region: "Пожалуйста, выберите свой регион:",
      welcome:
         "Добро пожаловать в наше приложение для врачей, планирующих переезд в Германию!",
      next: "Далее",
      back: "Назад",
      continue: "Продолжить",
      language: "Выберите язык:",
      options: [
         { value: "de", label: "Deutsch" },
         { value: "en", label: "English" },
         { value: "uk", label: "Українська" },
         { value: "ru", label: "Русский" },
      ],
      requirements: {
         title: "Требования к медицинскому признанию в Германии:",
         medEducation:
            "Медицинское образование: Законченное высшее образование в области медицины в Украине. Желательно окончание обучения на медицинском факультете.",
         aip: "Стажировка врача (AiP): Успешно завершенная стажировка врача (AiP) в Украине.",
         license:
            "Лицензия в Украине: Разрешение на осуществление медицинской деятельности в Украине.",
         languageSkills:
            "Знание языка: Актуальный сертификат о владении немецким языком на уровне B2.",
         note: "Примечание: Эти требования являются общими, и конкретные требования могут различаться в зависимости от федеральной земли в Германии. Важно следить за обновлениями и проверять конкретные требования на официальных веб-сайтах органов здравоохранения федеральных земель.",
      },
   },
};


export const thirdStepTranslation = {
   de: {
      applicationTitle: "Antragstellung und Approbation Checkliste",
      applicationSubtitle: "Antragstellung:",
      citizenshipInfo:
         "Deutsche Staatsbürger mit Wohnsitz im gewünschten Bundesland",
      residencePermitInfo:
         "Bürger anderer Länder mit Aufenthaltserlaubnis oder Niederlassungserlaubnis im Wohnsitz-Bundesland (§24)",
      residenceOutsideInfo:
         "Bei Wohnsitz außerhalb: Vereinbarung mit Klinik/Praxis oder andere überzeugende Gründe",
      approvalProcessTitle: "Ablauf der Approbation:",
      germanSkillsInfo: "Deutschkenntnisse auf B2-Niveau nachweisen",
      collectDocumentsInfo:
         "Erforderliche Dokumente sammeln, darunter Geburtsurkunde, Diplome, Gesundheitszeugnis, etc.",
      fillFormsInfo: "Antragsformulare ausfüllen und einreichen",
      checkRequirementsInfo:
         "Überprüfung auf Vollständigkeit und Einhaltung der Anforderungen",
      registerFSPInfo:
         "Registrierung für die Fachsprachprüfung (FSP) bei der Ärztekammer",
      professionalLicenseInfo:
         "Berufserlaubnis nach erfolgreicher FSP erhalten",
      approvalObtainInfo:
         "Erhalt der Approbation durch Gutachtliche Überprüfung oder Kenntnisprüfung",
      note: "Anmerkung: Die genauen Anforderungen können je nach Bundesland variieren. Bitte auf den offiziellen Websites der Gesundheitsbehörden nachschauen.",
   },
   en: {
      applicationTitle: "Application and Approval Checklist",
      applicationSubtitle: "Application:",
      citizenshipInfo: "German citizens residing in the desired federal state",
      residencePermitInfo:
         "Citizens of other countries with residence or settlement permits in the state of residence (§24)",
      residenceOutsideInfo:
         "For residence outside: Agreement with clinic/practice or other convincing reasons",
      approvalProcessTitle: "Approval Process:",
      germanSkillsInfo: "Prove German language skills at B2 level",
      collectDocumentsInfo:
         "Gather required documents including birth certificate, diplomas, health certificate, etc.",
      fillFormsInfo: "Fill out and submit application forms",
      checkRequirementsInfo:
         "Verification for completeness and compliance with requirements",
      registerFSPInfo:
         "Registration for the specialized language examination (FSP) at the Medical Association",
      professionalLicenseInfo:
         "Receive professional license after successful FSP",
      approvalObtainInfo:
         "Obtain approval through expert review or knowledge examination",
      note: "Note: Exact requirements may vary by federal state. Please check the official websites of health authorities.",
   },
   uk: {
      applicationTitle: "Заява та Чек-лист Затвердження",
      applicationSubtitle: "Заява:",
      citizenshipInfo:
         "Громадяни Німеччини, які проживають у бажаній федеральній області",
      residencePermitInfo:
         "Громадяни інших країн з дозволом на проживання чи поселення в області проживання (§24)",
      residenceOutsideInfo:
         "Для проживання за межами: Угода з клінікою/практикою чи інші переконливі причини",
      approvalProcessTitle: "Процес Затвердження:",
      germanSkillsInfo: "Довести знання німецької мови на рівні B2",
      collectDocumentsInfo:
         "Зібрати необхідні документи, зокрема свідоцтво про народження, дипломи, медичний сертифікат тощо",
      fillFormsInfo: "Заповнити та подати анкети",
      checkRequirementsInfo: "Перевірка на повноту та відповідність вимогам",
      registerFSPInfo:
         "Реєстрація на спеціалізований мовний іспит (FSP) в Лікарській асоціації",
      professionalLicenseInfo:
         "Отримання професійної ліцензії після успішного складання FSP",
      approvalObtainInfo:
         "Отримання затвердження шляхом експертної перевірки або іспиту на знання",
      note: "Примітка: Точні вимоги можуть варіюватися залежно від федеральної області. Будь ласка, перевірте офіційні веб-сайти органів охорони здоров'я.",
   },
   ru: {
      applicationTitle: "Заявление и Чек-лист Утверждения",
      applicationSubtitle: "Заявление:",
      citizenshipInfo:
         "Граждане Германии, проживающие в желаемом федеральном округе",
      residencePermitInfo:
         "Граждане других стран с разрешением на проживание или поселение в области проживания (§24)",
      residenceOutsideInfo:
         "Для проживания за пределами: Соглашение с клиникой/практикой или другие убедительные причины",
      approvalProcessTitle: "Процесс Утверждения:",
      germanSkillsInfo: "Доказать знание немецкого языка на уровне B2",
      collectDocumentsInfo:
         "Собрать необходимые документы, включая свидетельство о рождении, дипломы, медицинский сертификат и т. д.",
      fillFormsInfo: "Заполнить и подать анкеты",
      checkRequirementsInfo: "Проверка на полноту и соответствие требованиям",
      registerFSPInfo:
         "Регистрация на специализированный языковой экзамен (FSP) в Медицинской ассоциации",
      professionalLicenseInfo:
         "Получение профессиональной лицензии после успешного сдачи FSP",
      approvalObtainInfo:
         "Получение одобрения после экспертного рассмотрения или знаний на экзамене",
      note: "Примечание: Точные требования могут варьироваться в зависимости от федерального округа. Пожалуйста, проверьте официальные веб-сайты органов здравоохранения.",
   },
};