import React from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import {IconButton,Avatar} from  "@mui/material";
import SearchIcon from '@mui/icons-material/Search'
import { ArrowDropDown } from '@mui/icons-material';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useSelector} from 'react-redux';
const Header = () => { 
    const user=userSelector(selectUser);
    const dispatch=useDispatch();
    const signout=()=>{
        auth.signout().then(()=>{
            dispatch(logout());
        })
    };
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
                <Avatar src={user?.photoURL}/>
            </div>
        </div>
    )
}

export default Header
