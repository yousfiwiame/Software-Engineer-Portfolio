import { ContactUs } from "../../hooks/emialtrap";
import { useLanguage } from "../../context/LanguageContext";

export default function ContactLayout() {

  const { t, language } = useLanguage();

  const contactPath = {
    fr: [
      {
        title: "Adresse",
        content: "ENSIAS\nRabat, Maroc"
      },
      {
        title: "Téléphone",
        content: "+212 6 74 98 44 99"
      },
      {
        title: "Email",
        content: "wiame.yousfi22@gmail.com"
      },
      {
        title: "GitHub",
        content: "github.com/yousfiwiame"
      },
      {
        title: "LinkedIn",
        content: "Wiame Yousfi"
      },
      {
        title: "Disponibilité",
        content: "Lundi-Vendredi\n9h00 - 18h00"
      }
    ],
    en: [
      {
        title: "Address",
        content: "ENSIAS\nRabat, Morocco"
      },
      {
        title: "Phone Number",
        content: "+212 6 74 98 44 99"
      },
      {
        title: "Email",
        content: "wiame.yousfi22@gmail.com"
      },
      {
        title: "GitHub",
        content: "github.com/yousfiwiame"
      },
      {
        title: "LinkedIn",
        content: "Wiame Yousfi"
      },
      {
        title: "Availability",
        content: "Monday-Friday\n9am - 6pm"
      }
    ]
  };

  const currentLanguageContact = contactPath[language];

  return (
    <>
      <section className="contact container" id="contact">
        <div className="wrapper">
          <div className="title" data-aos="zoom-in" data-aos-duration="1000">
            <h3>{t('contact')}</h3>
          </div>
          <div className="form" data-aos="fade-up" data-aos-duration="1000">
            <div className="box">
              <div className="sub-box">
                {currentLanguageContact.map((item, index) => (
                  <div className="add" key={index}>
                    <span className="icon">
                      {item.title === 'Adresse' || item.title === 'Address' ? (
                        <i className="fa-solid fa-location-dot"></i>
                      ) : item.title === 'Téléphone' || item.title === 'Phone Number' ? (
                        <i className="fa-solid fa-phone"></i>
                      ) : item.title === 'Email' ? (
                        <i className="fa-solid fa-envelope"></i>
                      ) : item.title === 'GitHub' ? (
                        <i className="fa-brands fa-github"></i>
                      ) : item.title === 'LinkedIn' ? (
                        <i className="fa-brands fa-linkedin"></i>
                      ) : (
                        <i className="fa-regular fa-clock"></i>
                      )}
                    </span>
                    <h3>{t(item.title)}</h3>
                    <p>{item.title === 'GitHub' || item.title === 'LinkedIn' ? (
                        <a href={item.title === 'GitHub' ? "https://github.com/yousfiwiame" : "https://www.linkedin.com/in/wiame-yousfi-2a989a243/"} target="_blank" rel="noopener noreferrer">
                          {item.content}
                        </a>
                      ) : item.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="box">
              <div className="formBox">
                <ContactUs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
