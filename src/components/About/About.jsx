import css from "./About.module.scss";
import { readText, profileTexts } from "./../../utils/data";
import useDarkMode from '../../hooks/useDarkMode';

const About = () => {
  const isDarkMode = useDarkMode();

  const imageSrc = isDarkMode
    ? "/public/経歴デザインダーク.PNG"
    : "/public/経歴デザイン.PNG";
  return (
    <section id='about' className={` ${css.wrapper}`}>
      <div className={`innerWidth aboutPaddings ${css.aboutBox}`}>
        <div className={css.profileContainer}>
          <div className={css.profileText}>
            <div className={css.profileBox}>
              <div className={css.profTop}>
                <div>
                  <p className={css.profileName_ja}>志和照太郎</p>
                  <p className={css.profileName_en}>Shotaro Shiwa</p>
                  <p className={css.introduction}>{`1997年生まれ 埼玉県出身\n東洋大学理工学部建築学科卒業`}</p>
                </div>
                <img src="/public/20230809icon.JPG" alt="" />
              </div>
              <div className={css.profileBody}>
                {profileTexts.map((paragraph, i) => <span key={i}>{paragraph}</span>)}
              </div>
            </div>
            <div>
              <img className={css.careerImg} src={imageSrc} alt="careerImg" />
            </div>
          </div>
        </div>
      </div>
      <footer className={css.footer}>
        <div className="innerWidth footerPaddings">
          <h2>Topaz Jade</h2>
          <div className={css.textBox}>
            <div className={css.readText} >
              {readText.map((paragraph, i) => <span key={i}>{paragraph}</span>)}
            </div>
            <div className={css.contactBox}>
              <p className={css.leadText}>お仕事のご相談はこちらから</p>
              <p className={css.mailAddress}>topazjade1997@gmail.com</p>
            </div>

          </div>
        </div>


      </footer>
    </section>
  )
}

export default About
