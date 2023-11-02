import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { FaImage } from 'react-icons/fa';
import { FaT } from "react-icons/fa6";
import { MdCircle } from "react-icons/md";
import { LuLink } from "react-icons/lu";
import { RiDropdownList } from "react-icons/ri";
import { SiWindows11 } from "react-icons/si";
import { TfiLayoutColumn2Alt } from "react-icons/tfi";
import { BiSolidRectangle, BiSolidSquare } from "react-icons/bi";
import { TbRectangleFilled } from "react-icons/tb";
import '../../App'

const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:'/layout',
            name:'Layout',
            icon:<TfiLayoutColumn2Alt/>
        },
        {
            path:'/label',
            name:'Label',
            icon:<FaT/>
        },
        {
            path:'/textbox',
            name:'Textbox',
            icon:<BiSolidRectangle/>
        },
        {
            path:'/button',
            name:'Button',
            icon:<TbRectangleFilled/>
        },
        {
            path:'/dropdown',
            name:'Textbox',
            icon:<RiDropdownList/>
        },
        {
            path:'/checkbox',
            name:'Checkbox',
            icon:<BiSolidSquare/>
        },
        {
            path:'/radiobutton',
            name:'Radiobutton',
            icon:<MdCircle/>
        },
        {
            path:'/table',
            name:'Table',
            icon:<SiWindows11/>
        },
        {
            path:'/navigation',
            name:'Navigation',
            icon:<LuLink/>
        },
        {
            path:'/image',
            name:'Image',
            icon:<FaImage/>
        }

    ]
    return (
        <div className='container'>
            <div className='sidebar'>
                <div className="top_section">
                    <h1 className="logo">Form designer</h1>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                            <div className='icon'>{item.icon}</div>
                            <div className='link_text'>{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>    
            <main>{children}</main>      
        </div>
    );
};

export default Sidebar;