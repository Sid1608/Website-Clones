import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton,Avatar} from  "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Header = () => { 
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://cdn5-ss14.sharpschool.com/UserFiles/Servers/Server_11798593/Image/Students%20page/Gmail-logo-color.jpg" alt=""/>
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text"/>
                <ArrowDropDown className="header__inputCaret"/>
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
