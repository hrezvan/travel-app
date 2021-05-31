import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from './../button/Button';
import './Footer.scss';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>Join the TRAVL newsletter to recieve the best vacation deals</p>
                <p className='footer-subscription-text'>You can unsubscribe anytime</p>
                <div className='input-areas'>
                    <form>
                        <input className='footer-input' type='email' name='email' placeholder='Your Email' />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up' >How it works!</Link>
                        <Link to='/' >Testimonials</Link>
                        <Link to='/' >Careers</Link>
                        <Link to='/' >Investors</Link>
                        <Link to='/' >Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/' >Support</Link>
                        <Link to='/' >Destinations</Link>
                        <Link to='/' >sponsorship</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/' >Submit Videos</Link>
                        <Link to='/' >Ambassadors</Link>
                        <Link to='/' >Agency</Link>
                        <Link to='/' >Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/' >Instagram</Link>
                        <Link to='/' >Facebook</Link>
                        <Link to='/' >Youtube</Link>
                        <Link to='/' >Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            TRAVL &nbsp; <i className='fas fa-plane' />
                        </Link>
                        <small className='website-rights'>TRAVL © 2021</small>
                        <div className='social-icons'>
                            <Link className='social-icon-link facebook' to='/' target='_blank' aria-label='facebook'>
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                            {/* <Link className='social-icon-link instagram' to='/' target='_blank' aria-label='instagram'>
                                <i className='fab fa-instagram-f'></i>
                            </Link> */}
                            <Link className='social-icon-link youtube' to='/' target='_blank' aria-label='youtube'>
                                <i className='fab fa-youtube'></i>
                            </Link>
                            <Link className='social-icon-link twitter' to='/' target='_blank' aria-label='twitter'>
                                <i className='fab fa-twitter'></i>
                            </Link>
                            <Link className='social-icon-link linkedin' to='/' target='_blank' aria-label='linkedin'>
                                <i className='fab fa-linkedin'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
