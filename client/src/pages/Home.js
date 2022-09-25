import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export class Home extends Component {
    render(){
         return(
            <div>
                <Helmet>
                    <title>Sai Finance Service</title>
                    <meta name="description" content="Fianace "/>
                </Helmet>
                
                <section className="Sai-service" id={4}>
                    <div className="container">
                        <h2 className="service_heading">Apply For Citi Credit Card</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/IndianOil-Citi-Platinum-Credit-Card-2.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Indian Oil Citi Credit Card</h3>
                                    </div>
                                    <div className="apply-now_arrow" data-toggle="modal" data-target="#iocc_cc"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/Citi-Rewards-Credit-Card.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Citi Rewards Credit Card</h3>
                                    </div>
                                    <div className="apply-now_arrow" data-toggle="modal" data-target="#crcc_cc"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/Citi-Cash-Back-Credit-Card.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Citi CashBack Credit Card</h3>
                                    </div>
                                    <div className="apply-now_arrow" data-toggle="modal" data-target="#cashback_cc"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/Citi-PremierMiles-Card.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Citi PremierMiles Card</h3>
                                    </div>
                                    <div className="apply-now_arrow" data-toggle="modal" data-target="#cpc_cc"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/indusInd-Legend_card-image.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Indusind Bank Legend Card</h3>
                                    </div>
                                    <div className="apply-now_arrow" data-toggle="modal" data-target="#iblc_cc"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/sbi-prime-cardface.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">SBI Card PRIME</h3>
                                    </div>
                                    <div className="apply-now_arrow" data-toggle="modal" data-target="#sbi-prime_cc"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/YBCC_spc_YPrivate_cc_img.png" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">Yes Bank World ELITE Card</h3>
                                    </div>
                                    <div className="apply-now_arrow" data-toggle="modal" data-target="#ybe_cc"></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 service_item">
                                <div className="service">
                                    <div className="service-icon">
                                        <img src="/assets/img/HDFC-Regalia-cc.jpeg" alt="services"/>
                                    </div>
                                    <div className="service-text">
                                        <h3 className="srv-title">HDFC Credit Card</h3>
                                    </div>
                                    <div className="apply-now_arrow" data-toggle="modal" data-target="#hdfcc_cc"></div>
                                </div>
                            </div>
                        </div>
                        <div className="apply-now__card-details modal fade" id="iocc_cc" role="dialog" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>    
                                            <li>Get up to 71 litres of free fuel in first year</li>
                                            <li>Fee waiver of Rs 1000 on annual spends of Rs 30000</li>
                                            <li>Fee waiver of Rs 1000 on annual spends of Rs 30000</li>
                                            <li>Annual fee : Rs 1000 + taxes#</li><li>Never - expiring reward points</li>
                                            <li>Simply tap and pay using contactless card</li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href='/customer'><button type="button" className="btn btn-primary">Apply now</button></a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="apply-now__card-details modal fade" id="crcc_cc" role="dialog" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>    
                                            <li>Get benefits worth Rs 4800+ in first year</li>
                                            <li>Points worth Rs 850^ on card activation</li>
                                            <li>Annual fee : Rs 1000 + taxes#0</li>
                                            <li>Fee waiver of Rs 1000 on annual spends of Rs 30000</li><li>Additional points worth Rs 2950**</li>
                                            <li>Never - expiring reward points</li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href='/customer'><button type="button" className="btn btn-primary">Apply now</button></a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="apply-now__card-details modal fade" id="cashback_cc" role="dialog" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>    
                                            <li>Get benefits worth Rs 3,300+ in first year</li>
                                            <li>Rs 950** on other spends</li>
                                            <li>Simply tap and pay using contactless card</li>
                                            <li>Rs 2400^ on movies, telephone & utility bills</li>
                                            <li>Annual fee : Rs 500 + taxes</li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href='/customer'><button type="button" className="btn btn-primary">Apply now</button></a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="apply-now__card-details modal fade" id="cpc_cc" role="dialog" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>    
                                            <li>Get benefits worth Rs 19,000+ in first year</li>
                                            <li>Miles worth Rs 3200** on airlines spends</li>
                                            <li>Never expiring miles</li>
                                            <li>Additional miles worth Rs 11600*** on travel and other spends</li>
                                            <li>Welcome miles worth Rs 4500^</li>
                                            <li>Annual fee : Rs 3000 + taxes</li>
                                            <li>Complimentary domestic airport lounge access</li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href='/customer'><button type="button" className="btn btn-primary">Apply now</button></a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        
                        <div className="apply-now__card-details modal fade" id="iblc_cc" role="dialog" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>    
                                            <li>Get benefits worth Rs 19,000+ in first year</li>
                                            <li>Miles worth Rs 3200** on airlines spends</li>
                                            <li>Never expiring miles</li>
                                            <li>Additional miles worth Rs 11600*** on travel and other spends</li>
                                            <li>Welcome miles worth Rs 4500^</li>
                                            <li>Annual fee : Rs 3000 + taxes</li>
                                            <li>Complimentary domestic airport lounge access</li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href='/customer'><button type="button" className="btn btn-primary">Apply now</button></a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="apply-now__card-details modal fade" id="sbi-prime_cc" role="dialog" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>    
                                            <li>Get benefits worth Rs 19,000+ in first year</li>
                                            <li>Miles worth Rs 3200** on airlines spends</li>
                                            <li>Never expiring miles</li>
                                            <li>Additional miles worth Rs 11600*** on travel and other spends</li>
                                            <li>Welcome miles worth Rs 4500^</li>
                                            <li>Annual fee : Rs 3000 + taxes</li>
                                            <li>Complimentary domestic airport lounge access</li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href='/customer'><button type="button" className="btn btn-primary">Apply now</button></a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="apply-now__card-details modal fade" id="ybe_cc" role="dialog" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>    
                                            <li>Get benefits worth Rs 19,000+ in first year</li>
                                            <li>Miles worth Rs 3200** on airlines spends</li>
                                            <li>Never expiring miles</li>
                                            <li>Additional miles worth Rs 11600*** on travel and other spends</li>
                                            <li>Welcome miles worth Rs 4500^</li>
                                            <li>Annual fee : Rs 3000 + taxes</li>
                                            <li>Complimentary domestic airport lounge access</li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href='/customer'><button type="button" className="btn btn-primary">Apply now</button></a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                        <div className="apply-now__card-details modal fade" id="hdfcc_cc" role="dialog" aria-hidden="true">
                            <div className="modal-dialog"> 
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <ul>    
                                            <li>Get benefits worth Rs 19,000+ in first year</li>
                                            <li>Miles worth Rs 3200** on airlines spends</li>
                                            <li>Never expiring miles</li>
                                            <li>Additional miles worth Rs 11600*** on travel and other spends</li>
                                            <li>Welcome miles worth Rs 4500^</li>
                                            <li>Annual fee : Rs 3000 + taxes</li>
                                            <li>Complimentary domestic airport lounge access</li>
                                        </ul>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        <a href='/customer'><button type="button" className="btn btn-primary">Apply now</button></a>
                                    </div>
                                </div>
                            </div>   
                        </div>
                    </div>    
                </section>
            </div>
            );
        }
    }

 export default Home