import React from 'react';

import './form-input.styles.scss';


const FormInput = ({handleChange}) => (
    <div className="group">
        <input 
        type="text" 
        className="form-input"
        onChange={handleChange}
        
        />
       <label htmlFor=""></label>

    </div>
);

export default FormInput;