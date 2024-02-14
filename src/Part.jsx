import {React, useState, useRef, useEffect} from 'react';
import { motion, useAnimation } from "framer-motion"
import ReactDOM from "react-dom";
import kitty1 from "./images/kitty1.gif"
import kitty2 from "./images/kitty2.gif"
import kitty3 from "./images/kitty3.gif"
import HeartFall from './HeartFall';


const Part = (props)=>
{

    const [isHovered, setIsHovered] = useState(false);
    const control = useAnimation();

    const [xx, setXx] = useState(0);
    const [yy, setYy] = useState(0);
    
    useEffect(() => {
      const rect = document.getElementById("btnNo").getBoundingClientRect();
      setXx(rect.left);
      setYy(rect.top);
      console.log(rect.left,"   ",rect.top)
    }, []);
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    
      control.start({
        x: getRandomValueOnXScale(window.innerWidth - 100) - xx,
        y: getRandomValueOnXScale(window.innerHeight - 50) - yy,
        transition: { duration: 0.15, 
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5}
      });
      
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    function getRandomValueOnXScale(screenWidth) {
      const randomXValue = Math.floor(Math.random() * screenWidth);
      return randomXValue;
    }

    const YES = () =>
    {
      const headerElement = document.getElementById("header");
      headerElement.textContent = "люблю тебя ❤";
      document.getElementById("btns").style.display = "none";
      document.getElementById("kitty").src = kitty2;

      const element = document.getElementById("part");
      const component = <HeartFall emoji = {"❤️"} />;
      const div = document.createElement("div");
      ReactDOM.render(component, div);
      element.appendChild(div);
    }

    const NO = () =>
    {
      const headerElement = document.getElementById("header");
      headerElement.textContent = "Попробуй еще раз! 😡";
      document.getElementById("btns").style.display = "none";
      document.getElementById("kitty").src = kitty3;

      const element = document.getElementById("part");
      const component = <HeartFall emoji = {"😡"} />;
      const div = document.createElement("div");
      ReactDOM.render(component, div);
      element.appendChild(div);
    }
    

    
    return(
      // сайт для Иришки
        <div id='part'>
            <h1 id='header'>Ты будешь моей валентинкой?</h1>
            <img id='kitty' src={kitty1} alt="" />
            <div id="btns">
                <button onClick={YES} className='btnChs' id='btnYes'>Да</button>
                <motion.button 
                className='btnChs' 
                id='btnNo'
                onHoverStart={handleMouseEnter}
                onHoverEnd={handleMouseLeave}
                animate={control}
                onClick={NO}
                >Нет</motion.button>
            </div>
        </div>
    );
};

export default Part;