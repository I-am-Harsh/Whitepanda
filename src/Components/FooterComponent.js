import React from 'react';

const Footer = () =>{

    return(
        <React.Fragment>
            <div className = 'footer '>
                <div className = 'container'>
                    <div className = 'col-md-12 row '>
                        <div className="row col-md-12 justify-content-center mb-3">
                            <div className = 'mr-5'>
                                <i className = 'fa fa-linkedin fa-2x'></i>
                            </div>
                            <div className='mr-5'>
                                <i className = 'fa fa-twitter fa-2x'></i>
                            </div>
                            <div className = 'mr-5'>
                                <i className = 'fa fa-facebook fa-2x'></i>
                            </div>
                            <div>
                                <i className = 'fa fa-instagram fa-2x'></i>
                            </div>
                        </div>
                        <div className="row col-md-12 justify-content-center mb-3">Copyright @ 2019 White Panda Media Pvt Ltd</div> 
                        <div className="row col-md-12 justify-content-center mb-3">All rights reserved</div>
                        <div className="row col-md-12 justify-content-center">
                            <div className="ptsc"><u>Privacy Policy</u></div>
                            <div className="ptsc"><u>Terms of Service</u></div>
                            <div className="ptsc"><u>Service Agreement</u></div>
                            <div className="ptsc"><u>Contact Us</u></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;