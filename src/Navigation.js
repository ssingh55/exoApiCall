import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/smssend">Click to send sms</NavLink>
            <NavLink to="/connecttwopersoncall">Click to connect call</NavLink>
        </div>
    )
}

export default Navigation;
