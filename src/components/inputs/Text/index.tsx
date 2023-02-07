import React, {FC} from 'react';
import {TextInputProps} from "@/components/inputs/Text/type";
import defaultStyles from '../defaultStyle.module.scss'


const TextInput: FC<TextInputProps> = ({label, value, onChange, required}) => {
    return (
        <div className={`${defaultStyles.form__group} ${defaultStyles.field}`}>
            <input value={value} onChange={onChange} required={required} placeholder={label} className={defaultStyles.form__field} type="text"/>
            <label className={defaultStyles.form__label} htmlFor="name">{label}</label>
        </div>
    );
};

export default TextInput;

