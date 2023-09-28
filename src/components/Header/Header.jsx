import css from "./Header.module.scss";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import useDarkMode from '../../hooks/useDarkMode';


const Header = () => {
  const location = useLocation();
  const isHero = location.pathname === '/Portfolio/';

  const isDarkMode = useDarkMode();

  const imageSrc = isDarkMode
    ? "/TopazJadeロゴdark.PNG"
    : "/TopazJadeロゴ.PNG";

  const [isActive, setIsActive] = useState(false);
  const openMenu = () => {
    setIsActive(!isActive);
  };


  return (
    <header className={`innerWidth HeaderPaddings
       ${css.header}
       ${isHero ? css.heroHeader : ''}`}
    >
      <div className={css.logo}>
        <img src={imageSrc} alt="Topaz Jade Logo" />
        <h3><NavLink className={` ${css.link}`} activeClassName={css.active} to="/Portfolio/" exact>Topaz Jade</NavLink></h3>
      </div>

      <nav className={`${isHero ? css.heroNav : css.navPc}`}>
        <ul >
          <li>
            <NavLink to="/Portfolio/works" activeClassName={css.active}>Works</NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/skills" activeClassName={css.active}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio/about" activeClassName={css.active}>About</NavLink>
          </li>
        </ul>
        <div className={css.buttonArea}></div>

      </nav>
      <nav className={`${css.navSp} ${isActive ? css.active : ''}`}>
        <ul >
          <li onClick={openMenu}>
            <NavLink to="/Portfolio/works" activeClassName={css.active}>Works</NavLink>
          </li>
          <li onClick={openMenu}>
            <NavLink to="/Portfolio/skills" activeClassName={css.active}>Skills</NavLink>
          </li>
          <li onClick={openMenu}>
            <NavLink to="/Portfolio/about" activeClassName={css.active}>About</NavLink>
          </li>
        </ul>
        <div className={`${css.openBtn} ${isActive ? css.active : ''}`}
          onClick={openMenu}
        >
          <span></span><span></span><span></span>
        </div>
        {/* <div className={css.buttonArea}></div> */}

      </nav>

    </header>
  )
}

export default Header
