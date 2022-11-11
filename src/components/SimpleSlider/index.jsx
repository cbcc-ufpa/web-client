import Slider from "react-slick";

import "./slick.css"; 
import "./slick-theme.css";
import CommentsCard from "../CommentsCard";
import Arrow from '../../assets/arrow_lilac.svg'

//Data
import data from "../../data/users.json"

export const SimpleSlider = () => {
    const usersData = data.users
    const settings = {
        autoplay: true,
        infinite: true,
        centerMode: true,
        centerPadding: '300px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <button className="slide-arrow prev-arrow"><img src={Arrow} /></button>,
        nextArrow: <button className="slide-arrow next-arrow"><img src={Arrow} /></button>,
        responsive: [
            {
            breakpoint: 1850,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 3
            }
            },
            ,
            {
            breakpoint: 1600,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 1500,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '150px',
                slidesToShow: 3
            }
            },
            {
                breakpoint: 1140,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 3
                }
                },
            {
            breakpoint: 1000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 800,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '175px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 750,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '200px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 650,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '140px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 550,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '70px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 400,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '30px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 350,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1
            }
            }
        ]
    };

    return (
    <Slider {...settings}>
        {usersData.map((user) => (
            <CommentsCard 
            comment={user.comment} 
            userName={user.name} 
            userJob= {user.company}
            userPhoto={user.avatar_url}/>
        ))}
    </Slider>
    );
}