import React from 'react';
import styles from './index.module.scss'
import Image from 'next/image'
import photo from '../../../public/Dizzy face-rafiki 1.png'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutMoreInfo}>
                <div className={styles.aboutMoreInfo__image}>
                    <Image className={styles.img} alt={'photo'} src={photo}/>
                </div>
                <div className={styles.aboutMoreInfo__info}>
                    <p>"Hello! My name is Vania, and I am a front-end developer. I am passionate about using technology
                        to solve problems and create innovative solutions. With 1.5 years in the industry, I have honed
                        my skills in Javascript, TypeScript, React, Next
                        I have worked on a variety of projects, ranging from simple landing to huge platform to exchange
                        students. My goal with each project is to deliver high-quality work that not only meets, but
                        exceeds my clients' expectations.
                        <br/>
                        <br/>
                        Thank you for visiting my portfolio. I am excited to hear from you and discuss how I can bring
                        my expertise to your next project."</p>
                </div>
            </div>
            <div className={styles.aboutMoreInfo__technologies}>
                <h2 className={styles.technologies__title}>Technologies</h2>
                <ul className={styles.technologies__list}>
                    <li>
                       JavaScript
                    </li>
                    <li>
                        TypeScript
                    </li>
                    <li>
                       NextJS
                    </li>
                    <li>
                        React
                    </li>
                    <li>
                        GraphQl
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default About;