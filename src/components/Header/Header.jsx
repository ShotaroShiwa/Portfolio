import css from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import useDarkMode from '../../hooks/useDarkMode';


const Header = () => {
  const location = useLocation();
  const isHero = location.pathname === '/Portfolio/';
  const isSingleWork = location.pathname === '/Portfolio/works/';

  const isDarkMode = useDarkMode();

  const imageSrc = isDarkMode
    ? "/TopazJadeロゴdark.PNG"
    : "/TopazJadeロゴ.PNG";


  return (
    <header className={`innerWidth HeaderPaddings
       ${css.header}
       ${isHero ? css.heroHeader : ''} ${isSingleWork ? css.singleWorkHeader : ''}`}
    >
      <div className={css.logo}>
        <img src={imageSrc} alt="Topaz Jade Logo" />
        <h3><NavLink className={` ${css.link}`} activeClassName={css.active} to="/Portfolio/" exact>Topaz Jade</NavLink></h3>
      </div>

      <nav>
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

    </header>
  )
}

export default Header
