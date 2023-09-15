import { useCallback, useRef, useEffect, useLayoutEffect } from 'react'
import Cookies from "js-cookie";

const useDarkModeButton = () => {
  const checkboxElement = useRef(null)

  const themeChangeEvent = new Event('themeChange');

  const handleChange = useCallback(e => {
    const btn = e.target
    const body = document.body

    if (btn.checked === true) {
      body.classList.remove("light-theme")
      body.classList.add("dark-theme")
      Cookies.set('darkMode', 'on')
    } else {
      body.classList.remove("dark-theme")
      body.classList.add("light-theme")
      Cookies.remove('darkMode')
    }

    document.dispatchEvent(themeChangeEvent);
  })

  useLayoutEffect(() => {
    const darkModeCookie = Cookies.get('darkMode')
    const body = document.body
    const checkbox = checkboxElement.current

    if (darkModeCookie) {
      body.classList.add('dark-theme');
      checkbox.checked = true;
    } else {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      checkbox.checked = false;
    }
  }, [])

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const darkModeOn = darkModeMediaQuery.matches
    const body = document.body
    const checkbox = checkboxElement.current

    darkModeMediaQuery.addListener((e) => {
      const darkModeOn = e.matches;
      if (darkModeOn) {
        body.classList.remove('light-theme');
        checkbox.checked = true
      } else {
        body.classList.remove('dark-theme');
        Cookies.remove('darkMode')
        checkbox.checked = false
      }
    });
  }, [])
  return [
    checkboxElement,
    handleChange
  ]
}

export default useDarkModeButton
