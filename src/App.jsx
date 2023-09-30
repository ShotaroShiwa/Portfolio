import React from "react";
import css from './styles/App.module.scss'
import Hero from "./components/Hero/Hero";
import Works from "./components/Works/Works";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToggleSwitchButton from './components/ToggleSwitchButton/ToggleSwitchButton';
import useDarkModeButton from "./utils/useDarkModeButton";
import SingleWork from "./components/SingleWork/SingleWork";
import Loading from "./components/Loading/Loading";



function App() {
  const [
    checkboxElement, handleChangeDarkMode
  ] = useDarkModeButton()

  return (
    <>
      <Loading />
      <div className={`${css.container}`}>
        <Router>
          <ToggleSwitchButton
            className=" darkModeBtnPaddings toggle-switch-button"
            size="1em"
            handleChange={handleChangeDarkMode}
            ref={checkboxElement}
          />
          <Header />
          <Routes>
            <Route path="/Portfolio/" element={<Hero />}></Route>
            <Route path="/Portfolio/works" element={<Works />}></Route>
            <Route path="/Portfolio/works/:workId" element={<SingleWork />}></Route>
            <Route path="/Portfolio/skills" element={<Skills />}></Route>
            <Route path="/Portfolio/about" element={<About />}></Route>
          </Routes>
        </Router>

      </div>
    </>
  )
}

export default App
