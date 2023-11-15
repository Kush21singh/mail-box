import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import './css/Header.css';
const Header = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <IconButton>
                <ReorderIcon></ReorderIcon>
            </IconButton>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyaIPaVEQtS51PYZZdmOEaKzfrYr5sD0aY_Q&usqp=CAU' alt='logo'
            style={{ width: '100px', height: '50px' }}
            />
        </div>
        <div className='header__middle'>
            <div className='search_mail'>
            <IconButton>
                <SearchIcon></SearchIcon>
            </IconButton>
            <input type='text' placeholder='Search Mail'/> 
            <IconButton>
                <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>               
            </div>
        </div>
        <div className='header__right'>
            <IconButton>
                <HelpOutlineIcon></HelpOutlineIcon>
            </IconButton>

            <IconButton>
                <SettingsIcon></SettingsIcon>
            </IconButton>

            <IconButton>
                <AppsIcon></AppsIcon>
            </IconButton>

            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYph6e3dQ-fgSwSLNlguz6a8KrdH7x5ksOA&usqp=CAU'></Avatar>
        </div>
    </div>
  )
}

export default Header