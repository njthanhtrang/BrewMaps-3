import React from 'react';
import cheers from '../../public/images/cheers.png';
import Auth from '../../utils/auth';

export default function Nav() {

    function showNavigation() {
        if (Auth.loggedIn()) {
            return (
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href="./SignUp">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="/" onClick={() => Auth.logout()}>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary" href="./SignUp">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="./Login">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    }
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">BrewMap
                    <img src={cheers} width="28" height="28"></img>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>            

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>

                    <a className="navbar-item" href="./Social">
                        Blog
                    </a>

                    <a className="navbar-item" href="./User">
                        User Profile
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="./about">
                                About
                            </a>
                            <a className="navbar-item" href="./Contact">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>

                {showNavigation()}
            </div>
        </nav>
    )
}