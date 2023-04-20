import React from "react";
import IconStar from '../src/images/icon-star.svg'
import "./Rating.css";

const Rating = ({ rating, setRating, setThankYou }) => {
    const submitHandler = () => {
        if (rating) setThankYou(true);

    };

    let number = [1, 2, 3, 4, 5];

    return (
        <div className="ratingCard">
            <div className="startDiv">
                <img className="star" src={IconStar} alt="star" />
            </div>
            <h2 className="question">How did we do?</h2>
            <p className="paragraph">
                Please let us know how we did with your support request. All feedback is
                appreciated to help us improve our offering!
            </p>
            <div className="ratingList">
                {number.map((num, index) => (
                    <button
                        className={`rating ${num === rating && "chosen"}`}
                        onClick={() => {
                            setRating(num);
                        }}
                        key={index}
                    >
                        {num}
                    </button>

                ))}
            </div>
            <div className="centerButt">
                <button
                    onClick={() => {
                        submitHandler();
                    }}
                    className="submit"
                    type="submit"
                >
                    SUBMIT
                </button>
            </div>
        </div>
    );
};

export default Rating;