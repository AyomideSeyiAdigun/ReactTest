import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Outlet,Link } from 'react-router-dom'; 
import './topbar.css'
function Topbar() {
    const user = false
    return (
        <div className="topbar">
            <Link to='/'> <span className="topbar__logo">LOGO</span></Link>

            <div className="topbar__nav">
                <Link to='/covid'>
                <div   className='topbar__option'>
                     
                        Covid-19 Data Page      
                     
                </div>
                </Link>
                <Link to='/figma'>
                <div className='topbar__option'>
                    
                        Figma Design Code
                    
                </div>
                </Link>
                   
                
            </div>
            <Outlet/>
        </div>
    )
}
export default Topbar
