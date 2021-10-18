import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <>
            <div className="bgColor px-5 py-4">
                <div className="d-flex pt-5 px-5 justify-content-between container">
                    <div className="text-left">
                        <h3>DONATE TO SUPPORT OPEN-SOURCE COURSES</h3>
                        <p>Supporting open-source projects and the folks <br /> who run them is what Brainstorm learnweb is all about. <br /> Besides ticking off pull requests and flexing our coding muscles.</p>
                    </div>
                    <div className="block icon-list">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><i className="fab fa-facebook-square icon"></i>&nbsp;Facebook</li>
                            <li><i className="fab fa-twitter icon"></i>&nbsp;Twitter</li>
                            <li><i className="fas fa-share-square icon"></i>&nbsp;Share Square</li>
                            <li><i className="fab fa-google-plus-g icon"></i>&nbsp;Google Plus</li>
                        </ul>

                    </div>
                    <div className="list-style">
                        <h3>Legal</h3>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mx-auto bg-clr py-3">
                <p><i className="far fa-copyright"></i>&nbsp;2021 Doctors Care Hospital, LLC. All rights reserved.</p>
            </div>
        </>
    );
};

export default Footer;