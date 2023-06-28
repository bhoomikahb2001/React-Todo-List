import {useContext} from 'react';
import "./Nav.css";

function Nav(props) {
   
    return (
        <div className="nav">
            <div className="title">
                <h2>React Component</h2>
            </div>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">Todo</a>
                <a href="#">Profile</a>
                <a href="#">Contact Us</a>
            </div>
        </div>
    );
}

export default Nav;