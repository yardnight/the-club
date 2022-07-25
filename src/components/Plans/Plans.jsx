import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plans = () => {
    return (
        <div className="Plans" id="plans">
            <div className="blur plans-blur-l"></div>
            <div className="blur plans-blur-r"></div>

            {/* Header */}
            <div className="plans-header">
                <span className="stroke-text">Ready to start</span>
                <span>Your Journey</span>
                <span className="stroke-text">Now with us</span>
            </div>
            {/* Plan Cards */}
            <div className="plans-card">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>${plan.price}</span>
                        <div className="features">
                            {plan.features.map((feature, j) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={j}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more benefits</span>
                        </div>
                        <button className="btn">Join now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
