import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import "../css/Main.scss";

const SLIDE = [
    { id: 1, title: "01 The world expands along the new pach created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "/sub01" },
    { id: 2, title: "02 The world expands along the new pach created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "/sub01" },
    { id: 3, title: "03 The world expands along the new pach created", content: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다", link: "/sub01" },
];

const Main = () => {
    const [num, setNum] = useState(0);
    return (
        <section className="Main">
            <div className="mainVisual">
                <Swiper loop={true} onSlideChange={(it) => console.log(it.realIndex)} className="mainSlider">
                    {SLIDE.map((slide, idx) => {
                        return (
                            <SwiperSlide className={`itm itm${slide.id} ${num === idx ? "on" : ""}`} key={slide.id}>
                                <div className="content">
                                    <p>{slide.title}</p>
                                    <div className="des">{slide.content}</div>
                                    <Link to={slide.link}>자세히 보기</Link>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Main;
