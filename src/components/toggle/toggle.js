import {useState, useEffect} from 'react';
import "./toggle.css";
import "../background/background.css";
import "../hero/hero.css";
import "../navbar/navbar.css";
import "../contacts/contacts.css";
import "../player/player.css";
import "../timer/timer.css";

export default function Toggle() {
    const [isToggled, setIsToggled] = useState(false);
    const [theme, setTheme] = useState("light");
    const onToggle = () => {
      setIsToggled(!isToggled);
      isToggled? setTheme("light") : setTheme("dark");
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <label className="switch">
        <input type="checkbox" onClick={onToggle}/>
        <span className="slider"></span>
    </label>
  )
}