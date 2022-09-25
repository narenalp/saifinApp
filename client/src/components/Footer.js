import React, { Component } from 'react'
//import axios from 'axios';
export class Footer extends Component {
    render() {

        return (
            <div>
            <footer>
            <section className="socialmedia">
                <div className="socials">
                    <h6 className="footer__headings">Connect with Us</h6>
                    <ul>
                        <li><a target="_blank" href="https://twitter.com/"><i className="fa fa-twitter"></i> </a></li>
                        <li><a target="_blank" href="https://www.facebook.com/"><i className="fa fa-facebook"></i> </a></li>
                        <li><a target="_blank" href="https://www.whatsapp.com/"><i className="fa fa-whatsapp"></i> </a></li>
                        <li><a target="_blank" href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
                    </ul>
                </div>
            </section>    
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="  col-xs-12 col-md-4">
                            <div className="widget  widget_black_studio_tinymce  push-down-30"><h6  className="footer__headings">Contact Us</h6>
                                <div className="textwidget">
                                    <h4><a href="tel:"><i  className="fa fa-phone"></i>&nbsp;+91-8160693220</a></h4>
                                    <h4><a href="tel:"><i  className="fa fa-phone"></i>&nbsp;+91-7383304503</a></h4>
                                    <p><a href="mailto: contact@saifinservises.co.in">Send an Email</a></p>
                                    <p className="clinics"><strong>Sai Financial Services,</strong>
                                        <br/>Shop No. 13, Shree Ram Shopping Center, Off Sardar Patel Super Market, 
                                        <br/> PETLAD, Anand – 388450<br/>
                                        <a href="https://goo.gl/maps/YBJgbUvufMd8sHY98" rel="noopener" target="_blank"><i className="fa fa-map-pin"></i> Get directions</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" opening col-xs-12 col-md-4">
                            <div className="widget  widget_black_studio_tinymce  push-down-30">
                                <h6 className="footer__headings">Opening Hours</h6>
                                <div className="textwidget">
                                    <p>We will be open the following hours<br/></p>
                                    <h3><strong>Monday - Saturday:</strong><br/></h3>
                                    <p>10:30am – 8:30pm</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="widget  push-down-30">
                                <h6 className="footer__headings">Information</h6>
                                <div className="menu-footer-menu-container">
                                    <details>
                                        <summary>About Us</summary>
                                    </details>
                                    <details>
                                        <summary>Contact Us</summary>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__center">
                       © 2021 Copyright | <strong> Sai Financial Services</strong> | All Rights Reserved by<span style={{color:"red"}}> &hearts;</span><a href="/"><strong> Parthvi.</strong></a>
                    </div>
                </div>
            </section>					
        </footer>
            </div>
        )
    }
}

export default Footer
