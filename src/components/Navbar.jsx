import Logo from '../assets/EnsiasLogo.png';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom'; // Importez RouterLink pour la navigation entre pages
import { useContext, useState, useRef } from 'react';
import { ScrollContext } from '../context/ScrollContext';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
    const { isSticky } = useContext(ScrollContext);
    const navRef = useRef();
    const burger = useRef();
    const content = useRef();
    const [nav, setNav] = useState();

    const { t, language } = useLanguage();

    // Paths for different languages with type property
    const navPath = {
        fr: [
            { title: "À propos de moi", link: "about", type: "scroll" },
            { title: "Projets", link: "work", type: "scroll" },
            { title: "Contact", link: "contact", type: "scroll" },
            {
                title: "Curriculum vitae", link: "/monCV.pdf"
                , type: "external"
            } // Type "external" pour ouvrir le PDF
        ],
        en: [
            { title: "About Me", link: "about", type: "scroll" },
            { title: "Projects", link: "work", type: "scroll" },
            { title: "Contact", link: "contact", type: "scroll" },
            { title: "Curriculum vitae", link: "/Resume.pdf", type: "external" }
        ]
    };


    const hamburger = () => {
        setNav(() => {
            navRef.current.classList.toggle("nav-active");
            burger.current.classList.toggle("click");
            content.current.classList.toggle("nav-active");
        });

        return nav;
    };

    const hideBar = () => {
        setNav(() => {
            navRef.current.classList.toggle("nav-active");
            burger.current.classList.toggle("click");
            content.current.classList.toggle("nav-active");
        });
    };

    // Render dynamic navbar links based on the current language and type
    const renderNavLinks = () => {
        return navPath[language].map((item, index) => (
            <li key={index}>
                {item.type === "scroll" ? (
                    <Link
                        onClick={hideBar}
                        className="nav-link"
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={100}
                    >
                        {item.title}
                    </Link>
                ) : item.type === "route" ? (
                    <RouterLink
                        onClick={hideBar}
                        className="nav-link"
                        to={item.link}
                    >
                        {item.title}
                    </RouterLink>
                ) : (
                    <a
                        className="nav-link"
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={hideBar}
                    >
                        {item.title}
                    </a>
                )}
            </li>
        ));
    };

    return (
        <>
            <div className="Navbar">
                <section className={isSticky ? 'header sticky' : 'header'}>
                    <div className="navbar" data-aos="zoom-in">

                        <div className="nav">
                            <ul className="navigation" ref={navRef}>
                                {renderNavLinks()}
                            </ul>
                        </div>

                        <div className="hamburger" onClick={hamburger} ref={burger}>
                            <div className="inner-hams">
                                <ul className="line"></ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="content" ref={content} onClick={hideBar}></div>
            </div>
        </>
    );
}