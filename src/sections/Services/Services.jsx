import React from 'react'
import styles from "./ServicesStyles.module.css"
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon

function Services() {
  return (
    <>
        <section id='services' className={styles.container}>
            <div className={styles.serviceGrid}>
                <div className={styles.left}>
                    <div className={styles.caption}>Our Services</div>
                    <p>Strategic solutions designed to elevate your organizational goals.</p>
                    <div className={styles.buttons}>
                        <a href="#contact" className={styles.requestButton}>
                            Request a proposal
                        </a>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.heading}>How can we help you?</h1>
                    <div className={styles.serviceContainer}>
                        <div className={styles.serviceSet1}>
                        <div className={styles.serviceBox}>
                            <div className={styles.boxMain}>
                                <div className={styles.title}>
                                    <div className={styles.indicator}></div>
                                        <a href="#contact" className={styles.link}>
                                            Executive Communication Services 
                                        </a>
                                </div>
                                <div className={styles.para}>
                                    <p>Our Executive Communication Services provide high-level communication strategies tailored for CEOs, management teams, and stakeholders. We specialize in crafting impactful speeches, presentations, and strategic communication plans that enhance organizational presence and influence.</p>
                                    <p>Whether it's crisis communication or media relations, our team ensures your message is clear, compelling, and aligned with your goals. We help amplify leadership voices, turning complex ideas into memorable messages that engage and inspire. Trust us to refine your communication strategy and elevate your brand's image in today’s fast-paced corporate world.</p>
                                </div>
                            </div>
                            <div className={styles.serviceTags}>
                                <Link to="/">SPEECH WRITING</Link>
                                <Link to="/">PRESENTATION DEVELOPMENT</Link>
                                <Link to="/">CRISIS COMMUNICATION</Link>
                                <Link to="/">MEDIA RELATIONS</Link>
                                <Link to="/">STAKEHOLDER ENGAGEMENT</Link>
                                <Link to="/">BRAND POSITIONING</Link>
                            </div>
                            <div className={styles.separator}></div>
                            <div className={styles.cta}>
                                <a href="#contact" className={styles.link}>
                                    Executive Communication Service <IoArrowForward />
                                </a>
                            </div>
                        </div>


                            <div className={styles.serviceBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator2}></div>
                                        <a href="#contact" className={styles.link}>
                                        Program Planning and Management 
                                        </a>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Our Program Planning and Management service delivers seamless end-to-end support for corporate programs, from initial planning to flawless execution. We handle every detail, ensuring your strategic initiatives, team-building events, and corporate retreats are executed with precision and purpose.</p>
                                        <p>With a focus on creating meaningful and engaging experiences, we enable stronger stakeholder engagement, aligning your objectives with innovative and efficient solutions. Rely on us for smooth planning, careful coordination, and impactful outcomes that drive team alignment and organizational success.</p>
                                    </div>
                                    <div className={styles.serviceTags}>
                                        <Link to="/">STRATEGIC INITIATIVES</Link>
                                        <Link to="/">TEAM BUILDING</Link>
                                        <Link to="/">CORPORATE RETREATS</Link>
                                        <Link to="/">EVENT MANAGEMENT</Link>
                                        <Link to="/">STAKEHOLDER ENGAGEMENT</Link>
                                        <Link to="/">SUCCESS PLANNING</Link>
                                    </div>
                                    <div className={styles.separator}></div>
                                    <div className={styles.cta}>
                                        <a href="#contact" className={styles.link}>
                                            Program Planning Service <IoArrowForward />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.serviceBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator3}></div>
                                        <a href="#contact" className={styles.link}>
                                            Academic and Research Services 
                                        </a>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Our Academic and Research Services provide expert support for academic writing, research consulting, and proposal development, helping clients navigate complex research projects with confidence and precision. We offer tailored guidance on grants, projects, and dissertation work, ensuring rigorous academic standards and impactful results.</p>
                                        <p>Whether you're working on a thesis, dissertation, or professional research project, our experienced consultants can assist in refining your ideas, structuring proposals, and developing comprehensive research plans. Trust us to elevate your academic work to its highest potential.</p>
                                    </div>
                                </div>
                                <div className={styles.serviceTags}>
                                    <Link to="/">ACADEMIC WRITING</Link>
                                    <Link to="/">RESEARCH CONSULTING</Link>
                                    <Link to="/">PROPOSAL DEVELOPMENT</Link>
                                    <Link to="/">THESIS GUIDANCE</Link>
                                    <Link to="/">GRANT APPLICATIONS</Link>
                                    <Link to="/">PROJECT SUPPORT</Link>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                    <a href="#contact" className={styles.link}>
                                        Academic Services <IoArrowForward />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.serviceBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator4}></div>
                                        <a href="#contact" className={styles.link}>
                                            Project Writing and Management
                                        </a>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Our Project Writing and Management service guides clients from concept to completion, offering comprehensive support for a wide range of projects. We specialize in developing business proposals, crafting compelling grant applications, and managing donor-funded initiatives to ensure project success.</p>
                                        <p>By handling each step with precision and strategic insight, we help bring projects to life effectively, supporting organizations in achieving their objectives and securing essential resources.</p>
                                    </div>
                                </div>
                                <div className={styles.serviceTags}>
                                    <Link to="/">BUSINESS PROPOSALS</Link>
                                    <Link to="/">GRANT APPLICATIONS</Link>
                                    <Link to="/">DONOR-FUNDED INITIATIVES</Link>
                                    <Link to="/">PROJECT MANAGEMENT</Link>
                                    <Link to="/">STRATEGIC PLANNING</Link>
                                    <Link to="/">IMPLEMENTATION SUPPORT</Link>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                    <a href="#contact" className={styles.link}>
                                        Project Writing Service <IoArrowForward />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.serviceBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator}></div>
                                        <a href="#contact" className={styles.link}>
                                           ICT Support 
                                        </a>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Our ICT Support services provide comprehensive IT consultancy and support to enhance your digital presence and security. From website development to data management and software solutions, we deliver the expertise needed to meet the demands of a digital-first world.</p>
                                        <p>With a strong focus on cybersecurity and digital transformation, we help businesses evolve their strategies, safeguard their data, and leverage technology for lasting impact.</p>
                                    </div>
                                </div>
                                <div className={styles.serviceTags}>
                                    <Link to="/">WEBSITE DEVELOPMENT</Link>
                                    <Link to="/">SOFTWARE SOLUTIONS</Link>
                                    <Link to="/">DATA MANAGEMENT</Link>
                                    <Link to="/">CYBERSECURITY</Link>
                                    <Link to="/">DIGITAL TRANSFORMATION</Link>
                                    <Link to="/">IT CONSULTANCY</Link>
                                    <Link to="/">GRAPHIC DESIGN</Link>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                    <a href="#contact" className={styles.link}>
                                        ICT Support Services <IoArrowForward />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default Services