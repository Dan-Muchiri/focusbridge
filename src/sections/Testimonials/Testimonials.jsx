import { IoStar, IoStarOutline } from 'react-icons/io5';
import React from 'react';
import styles from "./TestimonialsStyles.module.css";
import { IoArrowForward } from 'react-icons/io5';

const Testimonials = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(i <= rating ? <IoStar key={i} /> : <IoStarOutline key={i} />);
        }
        return stars;
    };
    const testimonialsData = [
        {
            id: 1,
            name: "Sarah Okumu",
            title: "Program Manager, InnovateTech",
            feedback: `"Focus Bridge provided exceptional academic and project writing services that elevated our grant proposal's impact. Their attention to detail and strategic approach ensured success."`,
            rating: 5,
        },
        {
            id: 2,
            name: "Michael Lee",
            title: "CEO, BridgePath Consulting",
            feedback: `"The team at Focus Bridge truly understands executive communication. Their support helped us deliver presentations with clarity and precision, boosting stakeholder confidence."`,
            rating: 4,
        },
        {
            id: 3,
            name: "Emily Mwangi",
            title: "Research Scholar",
            feedback: `"Focus Bridge’s guidance on my thesis was invaluable. Their academic expertise and constructive feedback made the process seamless and rewarding."`,
            rating: 5,
        },
    ];
    

    return (
        <section className={styles.testimonials}>
            <h2 className={styles.heading}>Why Clients Trust Focus Bridge</h2>
            <div className={styles.testimonialGrid}>
                {testimonialsData.map((testimonial) => (
                    <div key={testimonial.id} className={styles.testimonialCard}>
                        <p className={styles.feedback}>{testimonial.feedback}</p>
                        <h4 className={styles.name}>{testimonial.name}</h4>
                        <p className={styles.title}>{testimonial.title}</p>
                        <div className={styles.rating}>
                            {renderStars(testimonial.rating)}
                        </div>
                        <div className={styles.ctaGroup}>
                            <a href="#contact" className={styles.cta}>
                                Get in Touch <IoArrowForward />
                            </a>
                            <a href="#services" className={styles.cta}>
                                Explore Services <IoArrowForward />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
