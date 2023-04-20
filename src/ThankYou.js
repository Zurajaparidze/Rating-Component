import React from "react";
import Terminal from '../src/images/illustration-thank-you.svg';
import "./ThankYou.css";

const ThankYou = ({ rating }) => {
    return (
        <div className="thankYou">
            <img className="terminal" src={Terminal} alt="terminal" />
            <div className="resultDiv">
                <h3 className="result">You selected {rating} out of 5</h3>
            </div>
            <h2 className="thanks">Thank you!</h2>
            <p className="thanksP">
                We appreciate you taking the time to give a rating. If you ever need
                more support, don’t hesitate to get in touch!
            </p>
        </div>
    );
};

export default ThankYou;