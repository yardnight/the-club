import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { Link } from "react-scroll";
import NumberCounter from "number-counter";
import { motion } from "framer-motion";
const Hero = () => {
    const transition = { type: "spring", duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
        <div className="hero" id="home">
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/* the best ad */}
                <div className="the-best-ad">
                    <motion.div
                        initial={{ left: mobile ? "153px" : "238px" }}
                        whileInView={{ left: mobile ? "6px" : "8px" }}
                        transition={{ ...transition, type: "tween" }}
                    ></motion.div>
                    <span>the best fitness club in the town </span>
                </div>
                {/* Hero Heading */}
                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape</span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            in here we will help you to shape and build your
                            ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/* Figures */}
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter
                                end={140}
                                start={100}
                                delay="4"
                                preFix="+"
                            />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={978}
                                start={900}
                                delay="5"
                                preFix="+"
                            />
                        </span>
                        <span>members joind</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter
                                end={50}
                                start={30}
                                delay="3"
                                preFix="+"
                            />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
                {/* Hero Buttons */}
                <div className="hero-buttons">
                    <button className="btn">Get Started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn">
                    <Link to="join-us" spy={true} smooth={true}>
                        Join Now
                    </Link>
                </button>
                <motion.div
                    initial={{ right: "-7rem" }}
                    whileInView={{ right: "4rem" }}
                    transition={{ ...transition, duration: 2 }}
                    className="heart-rate"
                >
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>
                        <NumberCounter
                            end={116}
                            start={80}
                            delay="5"
                            postFix="bpm"
                        />
                    </span>
                </motion.div>
                {/* hero images */}
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: "11rem" }}
                    whileInView={{ right: "20rem" }}
                    transition={transition}
                    src={hero_image_back}
                    alt=""
                    className="hero-image-back"
                />
                {/* Calories */}
                <motion.div
                    initial={{ right: "37rem" }}
                    whileInView={{ right: "28rem" }}
                    transition={transition}
                    className="hero-calories"
                >
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories Burned</span>
                        <span>
                            <NumberCounter
                                end={475}
                                start={300}
                                delay="3"
                                postFix="kcal"
                            />
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
