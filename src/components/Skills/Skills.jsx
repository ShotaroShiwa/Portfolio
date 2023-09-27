import React, { useState, useEffect } from 'react';
import css from "./Skills.module.scss";
import { designIcons, developmentIcons } from '../../utils/data';
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
import useModal from "./../../hooks/useModal";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import modalStyles from "../../hooks/Modal.module.scss";
import useDarkMode from "../../hooks/useDarkMode";


const Skills = () => {

  const [activeSkill, setActiveSkill] = useState("");
  const [activeImg, setActiveImg] = useState("");
  const [activeText, setActiveText] = useState("");
  const [skillValue, setSkillValue] = useState(0);

  const handleIconClick = (name, lightIcon, text, value) => {
    if (activeText === text) {
      setActiveSkill("");
      setActiveImg("");
      setActiveText("");
      setSkillValue(0);
    } else {
      setActiveSkill(name);
      setActiveImg(lightIcon);
      setActiveText(text);
      setSkillValue(value);
    }
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  const options = {
    maintainAspectRatio: false,
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        max: 10,
        ticks: {
          color: '#1a1a1a',
          stepSize: 5
        },
        grid: {
          borderColor: '#1a1a1a',
          color: '#666666'
        }
      },
      y: {
        display: false
      }
    }

  };

  const [showModal, setShowModal] = useState(false);

  const handleIconClickAndOpenModal = (icon) => {
    handleIconClick(icon.name, icon.lightIcon, icon.text, icon.value);
    setShowModal(true);
  };


  useEffect(() => {
    if (showModal) {
      openModal(
        <div className={modalStyles.modalContent}>
          <div className={modalStyles.graphBox}>
            <div className={modalStyles.activeTitle_sp}>
              <div className={activeImg ? modalStyles.activeImg : ""}>
                {activeImg ? <img src={activeImg} /> : ""}
              </div>
              <div className={activeSkill ? modalStyles.activeSkill : ""}>
                {activeSkill}
              </div>
            </div>
            <div className={modalStyles.modalCanvas}>
              <Bar options={options} data={data} />
            </div>
            <div className={activeText ? modalStyles.activeText : ""}>
              {activeText}
            </div>
          </div>
        </div>
      );
      setShowModal(false);
    }
  }, [showModal]);





  const data = {
    labels: [activeText],
    datasets: [
      {
        data: [skillValue],
        categoryPercentage: 0.3
      }
    ],
  };

  const { Modal, openModal, show } = useModal();

  const isDarkMode = useDarkMode();

  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id='skills' className={`innerWidth paddings ${css.wrapper}`}>
      <div className={css.box}>
        <div className={css.extendBox}>
          <div className={css.graphBox}>
            <div className={css.activeTitle}>
              <div className={activeImg ? css.activeImg : ""}>
                {activeImg ? <img src={activeImg} /> : ""}
              </div>
              <div className={activeSkill ? css.activeSkill : ""}>
                {activeSkill || <div className={css.nullBox}></div>}
              </div>
            </div>
            {activeSkill && (
              <div className={css.canvas}>
                <Bar options={options} data={data} />
              </div>
            )}
            <div className={activeText ? css.activeText : ""}>
              {activeText || <div className={css.defaultText}> スキルアイコンをクリックすると説明が表示されます</div>}
            </div>
          </div>

        </div>
        <div className={css.skillBox_pc}>
          <div className={css.oneContainer}>
            <p>Development</p>
            <motion.div
              variants={fadeIn("down", "tween", 1, 1.5)}
              className={css.designContainer}
            >
              {developmentIcons.map((icon, index) => (
                <div key={index}
                  onClick={() => handleIconClick(icon.name, isDarkMode ? icon.darkIcon : icon.lightIcon, icon.text, icon.value)}
                  className={css.skillIcon}>
                  <img src={isDarkMode ? icon.darkIcon : icon.lightIcon} alt="" />
                </div>
              ))}
            </motion.div>
          </div>
          <div className={css.oneContainer}>
            <p>Design</p>
            <motion.div
              variants={fadeIn("down", "tween", 1, 1.5)}
              className={css.designContainer}
            >
              {designIcons.map((icon, index) => (
                <div key={index}
                  onClick={() => handleIconClick(icon.name, isDarkMode ? icon.darkIcon : icon.lightIcon, icon.text, icon.value)}
                  className={css.skillIcon}>
                  <img src={isDarkMode ? icon.darkIcon : icon.lightIcon} alt="" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className={css.skillBox_sp}>
          <div className={css.oneContainer}>
            <p>Development</p>
            <motion.div
              variants={fadeIn("down", "tween", 1, 1.5)}
              className={css.designContainer}
            >
              {developmentIcons.map((icon, index) => (
                <div key={index}
                  onClick={() => handleIconClickAndOpenModal(icon, 'development')}
                  className={css.skillIcon}>
                  <img src={isDarkMode ? icon.darkIcon : icon.lightIcon} alt="" />
                </div>
              ))}
            </motion.div>
          </div>
          <div className={css.oneContainer}>
            <p>Design</p>
            <motion.div
              variants={fadeIn("down", "tween", 1, 1.5)}
              className={css.designContainer}
            >
              {designIcons.map((icon, index) => (
                <div key={index}
                  onClick={() => handleIconClickAndOpenModal(icon, 'design')}
                  className={css.skillIcon}>
                  <img src={isDarkMode ? icon.darkIcon : icon.lightIcon} alt="" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Modal show={show} />
    </motion.section >

  )
}

export default Skills
