import React from 'react';
import logo from './../logo.png'

class Header extends React.Component{
    render() {
        return <div className="header">
            <img src={ logo } alt="Oven Mumu" style={{width: '300px'}} />
        </div>
    }
 }

 export default Header