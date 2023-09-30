import React, { useState, useEffect } from 'react'
import css from "./Loading.module.scss";

const Loading = () => {

  const [Loading, setLoading] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);


  const handleTransitionEnd = () => {
    if (!Loading) {
      setIsRendered(false);
    }
  }

  if (!isRendered) return null;

  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'white', zIndex: 300,
        opacity: Loading ? 1 : 0,
        transition: 'opacity 1s ease-in-out'
      }}
      onTransitionEnd={handleTransitionEnd}
    >
      <img className={css.backImgPc} src="/images/loadingPcNologo.PNG" alt="" />
      <img className={css.backImgSp} src="/images/loadingSpNologo.PNG" alt="" />
      <img className={css.logo} src="/images/loadingLogo.PNG" alt="" />
      <h1 className={css.loadingTitle}>
        Topaz Jade
      </h1>
    </div>
  )
}

export default Loading
