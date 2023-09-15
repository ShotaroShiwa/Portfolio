import css from "./Works.module.scss";
import useModal from "./../../hooks/useModal";
import { projects } from "../../utils/data";
import { Link } from "react-router-dom";


const Works = () => {
  const { Modal, openModal, show } = useModal();

  return (
    <section
      className={`innerWidth paddings ${css.wrapper}`}>

      <div className={`innerWidth ${css.workExContainer}`}>
        {projects.map((project) => (
          <div className={css.dataBox} >
            <Link to={`/Portfolio/works/${project.id}`}>
              <img src={project.img} alt={project.title} />
              <span>
                <div className={css.workTitle}>{project.title}</div>
                <div className={css.date}>{project.date}</div>
              </span>
            </Link>
          </div>
        ))}
      </div>

      {/* <Link to="/works/1234">test1234</Link> */}

      <Modal show={show} />
    </section>
  )
}

export default Works
