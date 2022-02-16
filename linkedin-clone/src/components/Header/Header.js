import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {logout} from '../../features/userSlice'
import HeaderOption from '../HeaderOption/HeaderOption';
import { useDispatch } from 'react-redux';
import {auth} from '../../firebase'
const Header = () => {
    const dispatch=useDispatch();
    const logoutOfApp=()=>{
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            
            <div className="header__left">
                <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1644762549~hmac=981c69a4fd6b3aefab7da235851d7c62" alt=""/>
                <div className="header__search">
                    <SearchIcon/>
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
                <HeaderOption title="Messaging" Icon={ChatIcon} />
                <HeaderOption title="Notifications" Icon={NotificationsIcon} />
                <HeaderOption avatar={true} title='me' onClick={logoutOfApp}/>
            </div>
        </div>
    )
}

export default Header
