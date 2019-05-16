import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../../common/header/Header';

class Profile extends Component {
    render() {
        return (
            <div>
                <Header />
                <span className="spanStyle">Profile Page</span>
            </div>
        )
    }
}

export default Profile;
