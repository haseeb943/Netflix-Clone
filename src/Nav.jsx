import React, { useEffect, useState } from 'react';

const Nav=()=>{
    const [show, setShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                setShow(true)

            }else setShow(false);
        });
        return()=>{
            window.removeEventListener("scroll");
        }
    },[]);
    return(
        <div className={`nav ${show?"nav_black":null}`}>
        <img className="nav_logo" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" 
        alt="logo"/>
        <img className="nav_avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="avatar logo"
        />    
        </div>
    );
};

export default Nav;