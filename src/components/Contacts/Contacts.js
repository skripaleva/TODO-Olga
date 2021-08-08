import React from 'react';
import styles from './Contacts.module.css';

const Contacts = () => (
    <div className={styles.wrap}>
        <h1 className={styles.contacts_title}>Контакты</h1>
        <div className={styles.contacts}>
            <img className={styles.contacts_img} src="https://i0.wp.com/riva-ufa.ru/image/wa.png" alt="" />
            <div className={styles.contacts_text}>8-965-972-07-21</div>
        </div>
        <div className={styles.contacts}>
            <img className={styles.contacts_img} src="https://drozdpcp.ru/wp-content/uploads/2019/09/High-contrast-emblem-mail.svg_.png" alt="" />
            <div className={styles.contacts_text}>olga.mylnikova.96@mail.ru</div>
        </div>
        <div className={styles.contacts}>
            <img className={styles.contacts_img} src="https://sun9-21.userapi.com/c840339/v840339094/3edb5/xgzTbzFk7AA.jpg" alt="" />
            <div className={styles.contacts_text}>8-965-972-07-21</div>
        </div>
    </div>
);

export default Contacts;