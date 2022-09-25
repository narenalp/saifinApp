import React from 'react';

function Header() {
    return (
            <header className="header navbar-light" role="banner">
                <div className="container-fuild" id="head-stuff">
                    <div className="logo">
                        <a href="/">
                        <img src="/assets/img/logo.png" />
                        </a>
                    </div>
                </div>
                <div className="container-fuild">  
                    <div className="navbar navbar-expand-lg" id="header">
                        <div className="kidsville-logo">
                            <a href="/">
                                 <img src="/assets/img/logo.png" />
                            </a>
                        </div>    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                         </button>         
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/" data-toggle="dropdown" aria-expanded="false">About Us</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/">Our History</a>
                                        <a href="/">About Us</a>
                                    </div>
                                </button>
                            </div>
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/children-dentistry" data-toggle="dropdown" aria-expanded="false">Cards</a>
                                </button>
                            </div>
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className=" dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Customer Service</a>
                                </button>
                            </div>    
                            <div className="dropdown navbar-nav end">
                                <button className="dropbtn drop-down"><a className="dropdown-toggle" href="/contact-us" data-toggle="dropdown" aria-expanded="false">Contact</a>
                                    <div className="dropdown-content dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a href="/contact-us">Contact Us</a>
                                    </div>
                                </button>
                            </div>  
                            <div className="header-widgets  header-widgets-desktop">
                        <div className="pink-offer widget  widget_black_studio_tinymce">
                                
                        </div>        
                    </div>
                        </div>
                    </div>
                </div>
            </header>
        )
}
        
export default Header                    