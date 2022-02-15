import { Avatar } from '@mui/material';
import React from 'react'
import "./Sidebar.css";
const Sidebar = () => {


    const recentItem =(topic)=>{
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvQRXWBKMqCQ4zssn7Ik5PI7IY0gZwih_i_g&usqp=CAU"
                alt="cover pics" 
                />
                <Avatar/>
                <h2>Siddharth Akar</h2>
                <h4>akarsiddharth@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">3,000</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">3,000</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineeing')}
                {recentItem('design')}
                {recentItem('developer')}
                {recentItem('college')}
            </div>
        </div>
    )
}

export default Sidebar
