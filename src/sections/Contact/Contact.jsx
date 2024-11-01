import React, { useState } from 'react';
import styles from "./ContactStyles.module.css";
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon

function Contact() {
    const [touchedFields, setTouchedFields] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [formValid, setFormValid] = useState(true); // State to track form validity

    const handleFocus = (field) => {
        setTouchedFields((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field) => {
        setTouchedFields((prev) => ({ ...prev, [field]: false }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const isFormValid = form.checkValidity(); // Check form validity

        if (isFormValid) {
            // Submit the form
            setFormValid(true);
            setSubmitted(true); // Set submitted to true
            form.submit();
        } else {
            setFormValid(false); // Set formValid to false if not valid
        }
    };

    return (
        <section id='contact' className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.titleBlock}>
                        <div className={styles.caption}>Let's Talk</div>
                        <p className={styles.leftP1}>Contact Us</p>
                        <p className={styles.leftP}> Our goal is to nurture your vision and provide innovative, custom solutions for all your needs.</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <form action="" method="post" className={styles.formContainer} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Name<span className={styles.required}>*</span></label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                onFocus={() => handleFocus('name')}
                                onBlur={() => handleBlur('name')}
                                className={touchedFields.firstName && !document.getElementById('name').value ? styles.invalid : ''}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="company">Company</label>
                            <input type="text" name="company" id="company" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email<span className={styles.required}>*</span></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                onFocus={() => handleFocus('email')}
                                onBlur={() => handleBlur('email')}
                                className={touchedFields.email && !document.getElementById('email').value ? styles.invalid : ''}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone">Phone Number<span className={styles.required}>*</span></label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                onFocus={() => handleFocus('phone')}
                                onBlur={() => handleBlur('phone')}
                                className={touchedFields.phone && !document.getElementById('phone').value ? styles.invalid : ''}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="service">What service are you looking for?<span className={styles.required}>*</span></label>
                            <select
                                name="service"
                                id="service"
                                required
                                onFocus={() => handleFocus('service')}
                                onBlur={() => handleBlur('service')}
                                className={touchedFields.service && !document.getElementById('service').value ? styles.invalid : ''}
                            >
                                <option value="" disabled selected>Please Select</option>
                                <option value="Executive Communication Services">Executive Communication Services</option>
                                <option value="Program Planning and Management">Program Planning and Management</option>
                                <option value="Academic and Research Services">Academic and Research Services</option>
                                <option value="Project Writing and Management">Project Writing and Management</option>
                                <option value="ICT Support">ICT Support</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="projectDetails">Tell us more about your project:<span className={styles.required}>*</span></label>
                            <textarea
                                name="projectDetails"
                                id="projectDetails"
                                required
                                onFocus={() => handleFocus('projectDetails')}
                                onBlur={() => handleBlur('projectDetails')}
                                className={touchedFields.projectDetails && !document.getElementById('projectDetails').value ? styles.invalid : ''}
                            ></textarea>
                        </div>
                        <input className={styles.subButton} type="submit" value="Submit" />
                        {/* Display message if the form is invalid */}
                        {!formValid && <p className={styles.errorMessage}>Please fill out the required fields.</p>}
                    </form>
                </div>
            </div>
        </section>
    ); 
}

export default Contact;