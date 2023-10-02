import React from 'react'
import css from "./SingleWork.module.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import { projects } from "../../utils/data";
import ScrollTop from '../../utils/scrollTop';


const SingleWork = () => {
  const { workId } = useParams();
  const displayWork = projects.find((f) => f.id === Number(workId));
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const RequesterDisplay = ({ text }) => {
    const dawnPattern = /学習サイトDAWN/;
    if (dawnPattern.test(text)) {
      return (
        <span>
          {text.split(dawnPattern)[0]}
          <a href="https://dawn-techschool.com/">学習サイトDAWN</a>
          {text.split(dawnPattern)[1]}
        </span>
      );
    }
    return <span>{text}</span>;
  };



  return (
    <>
      <ScrollTop />
      <div className={css.logoHeader}>
        <img className={css.topLogo} src={displayWork.logo} alt="" />
        <div className={css.btn}>
          <a onClick={goBack}>back</a>
        </div>
      </div>
      <section className={`innerWidth paddings ${css.wrapper}`}>
        <img className={css.mv} src={displayWork.img} alt="" />
        <div className={css.introBox}>
          <div className={css.titleArea}>
            <div className={css.title}>{displayWork.title}</div>
            <div className={css.date}>{displayWork.date}</div>
          </div>
          <div className={css.requester}>
            <RequesterDisplay text={displayWork.requester} />
            {displayWork.code && (
              <div className={css.gitUrl}>
                Code: <a href={displayWork.code} target="_blank" rel="noopener noreferrer">{displayWork.code}</a>
              </div>
            )}
          </div>
          <div className={css.part}>{displayWork.part}</div>
          <div className={css.usedSkill}>{displayWork.usedSkill}</div>
        </div>
        <div className={css.overview}>{displayWork.overview}</div>
        <div className={css.summary}>{displayWork.summary}</div>
      </section>
    </>

  )
}

export default SingleWork
