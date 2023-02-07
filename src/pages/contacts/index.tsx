import React from 'react';
import styles from './index.module.scss'
import TextInput from "@/components/inputs/Text";
import {Button} from "@/components/Button";

const Contacts = () => {
    return (
        <div className={styles.contactsContainer}>
            <div className={styles.contactsForm}>
                <h2>Contact me</h2>
                <TextInput label={'Name'} value={''} onChange={() => {}}/>
                <TextInput label={'Email'} value={''} onChange={() => {}}/>
                <TextInput label={'Messages'} value={''} onChange={() => {}}/>
                <div className={styles.contactsForm__button}>
                    <Button>Send</Button>
                </div>
            </div>
            <div className={styles.contactsImage}/>
        </div>
    );
};

export default Contacts;