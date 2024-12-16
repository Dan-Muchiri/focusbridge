import React from 'react';
import styles from './FooterStyles.module.css'; // Assuming you have a separate CSS file for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerLogo}>
                    <h2>FocusBridge Partners LTD</h2>
                    <p>Empowering businesses through innovative solutions.</p>
                </div>
                <div className={styles.footerLinks}>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.footerContact}>
                    <h3>Contact Us</h3>
                    <p>Email: info@focusbridgepartners.com</p>
                    <p>Phone: +254 723 807 031</p>
                    <p>
                            <a href="https://wa.me/254723807031" target="_blank" rel="noopener noreferrer" className={styles.whatsappLink}>
                                <FontAwesomeIcon icon={faWhatsapp} className={styles.whatsappIcon} />
                                Chat with us on WhatsApp
                            </a>
                        </p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; {new Date().getFullYear()} FocusBridge Partners LTD. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
