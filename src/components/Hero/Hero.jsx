import css from "./Hero.module.scss";
import useDarkMode from '../../hooks/useDarkMode';

const Hero = () => {
  const isDarkMode = useDarkMode();

  const imageSrc = isDarkMode
    ? "/public/TopazJadeロゴdark.PNG"
    : "/public/TopazJadeロゴ.PNG";

  return (
    <>
      <section className={`innerWidth paddings ${css.wrapper}`}>
        <div className={css.container}>
          <p className='secondaryText'>Portfolio</p>
          <div className={css.heroContent}>
            <div className={css.nameBox}>
              <img src={imageSrc} alt="Topaz Jade Logo" />
              <div className={css.titleBox}>
                <p className="primaryText">Topaz Jade</p>
                <p className="secondaryText">Web Designer & Developer</p>
              </div>
            </div>
            <p className={css.credit}>@2023 Topaz Jade</p>
          </div>
        </div>

      </section>
    </>
  )
}

export default Hero
