import React from "react";
import "./Prodrams.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
const Programs = () => {
    return (
        <div className="Programs" id="programs">
            {/* Header */}
            <div className="programs-header">
                <span className="stroke-text">Explore our</span>
                <span>Program</span>
                <span className="stroke-text">to shape you</span>
            </div>
            {/* Category */}
            <div className="program-category">
                {programsData.map((program) => (
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>

                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Programs;
