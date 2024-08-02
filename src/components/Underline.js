import React from 'react'
import './Underline.css'
import PropTypes from 'prop-types';

const Underline = ({ color }) => {
    return (
        <div className="underline" style={{ backgroundColor: color }}></div>
    );
}

Underline.propTypes = {
    color: PropTypes.string.isRequired,
};

export default Underline
