import React, { useState } from 'react';
import css from "./Skills.module.scss";
import { designIcons, developmentIcons } from '../../utils/data';
import { fadeIn, staggerChildren } from "../../utils/motion";
import { motion } from "framer-motion";
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


const Skills = () => {

  const getBarColor = (category) => {
    switch (category) {
      case 'design':
        return 'rgba(0, 123, 255, 0.5)';
      case 'development':
        return 'rgba(255, 0, 0, 0.5)';
      default:
        return 'rgba(0, 102, 102, 0.6)';
    }
  }

  const [activeSkill, setActiveSkill] = useState("");
  const [activeIcon, setActiveIcon] = useState("");
  const [activeText, setActiveText] = useState("");
  const [skillValue, setSkillValue] = useState(0);
  const [activeCategory, setActiveCategory] = useState("");

  const handleIconClick = (name, icon, category, text, value) => {
    if (activeText === text) {
      setActiveSkill("");
      setActiveIcon("");
      setActiveText("");
      setSkillValue(0);
      setActiveCategory("");
    } else {
      setActiveSkill(name);
      setActiveIcon(icon);
      setActiveText(text);
      setSkillValue(value);
      setActiveCategory(category);
    }
  }

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
          stepSize: 1
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


  const data = {
    labels: [activeText],
    datasets: [
      {
        data: [skillValue],
        backgroundColor: getBarColor(activeCategory),
        categoryPercentage: 0.5
      }
    ],
  };

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
            <div className={activeIcon ? css.activeIcon : ""}>
              {activeIcon || <div className={css.defaultText}> </div>}
            </div>
            <div className={activeSkill ? css.activeSkill : ""}>
              {activeSkill || <div className={css.defaultText}> </div>}
            </div>
            <Bar options={options} data={data} />
            <div className={activeText ? css.activeSkill : ""}>
              {activeText || <div className={css.defaultText}> スキルアイコンをクリックすると説明が表示されます</div>}
            </div>
          </div>

        </div>
        <div className={css.skillBox}>
          <div className={css.oneContainer}>
            <p>Development</p>
            <motion.div
              variants={fadeIn("down", "tween", 1, 1.5)}
              className={css.designContainer}
            >
              {developmentIcons.map((icon, index) => (
                <div key={index}
                  onClick={() => handleIconClick(icon.name, icon.img, 'development', icon.text, icon.value)}
                  className={css.skillIcon}>
                  <img src={icon.img} alt="" />
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
                  onClick={() => handleIconClick(icon.name, icon.img, 'design', icon.text, icon.value)}
                  className={css.skillIcon}>
                  <img src={icon.img} alt="" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Skills
