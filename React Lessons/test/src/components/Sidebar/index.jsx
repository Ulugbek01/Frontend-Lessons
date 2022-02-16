import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { sidebar } from '../../utils/sidebar'

export const Sidebar = () => {
    const [sidebarInfo, setSidebar] = useState(sidebar);
  return (
    <div>
        {sidebarInfo.map((value)=> 
            <NavLink to={value.path} key={value.id}>
                {value.title}
            </NavLink>
        )}
    </div>
  )
}
