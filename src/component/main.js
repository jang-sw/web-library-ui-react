import react, { useEffect } from "react";
import { Swiper, SwiperSlide  } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { useLocation, useNavigate, Link  } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/autoplay';
export default function Main() {
    const loc = useLocation();
    const navigate = useNavigate();
  
    useEffect(()=>{
        if(!loc || !loc.state || loc.state.is != 't')  navigate('/');
    },[])

    return (
        <div className="bg-gray-100 overflow-x-hidden">
                    
            <header className="p-5 bg-white shadow-md flex justify-between items-center">
                <span className="font-semibold">Logged in as: <span id="username" style={{color: "#0029a4"}} className="cursor-pointer">Admin</span></span>
                <span className="font-semibold">Reading Coins: <span id="coins" style={{color: "red"}} className="cursor-pointer">100</span>🪙</span>
            </header>

            <div className="swiper-container my-5">
                    <Swiper className='swiper-container' spaceBetween={30} slidesPerView={1} autoplay={{delay:2600}}    modules={[Autoplay]}>
                        <SwiperSlide className="swiper-slide p-5 bg-indigo-500 text-white"> Announcement 1: 도서관 오픈! </SwiperSlide>
                         <SwiperSlide className="swiper-slide p-5 bg-green-500 text-white"> Announcement 2: 판타지에 새 책 추가! </SwiperSlide>
                    </Swiper>
                <div className="swiper-pagination"></div>
            </div>

            <main className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 p-5">
                <Link state={{ is: 't' }} to="/list" className="category bg-white shadow p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src="fantasy.jpg" alt="Fantasy" className="w-20 h-20"/>
                    <span  className="mt-2">Fantasy</span>
                </Link>
                <div className="category bg-white shadow p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src="romance.jpg" alt="Fantasy" className="w-20 h-20"/>
                    <span className="mt-2">Romance</span>
                </div>
                <div className="category bg-white shadow p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src="comedy.jpg" alt="Fantasy" className="w-20 h-20"/>
                    <span className="mt-2">Comedy</span>
                </div>
                <div className="category bg-white shadow p-5 flex flex-col items-center justify-center cursor-pointer">
                    <img src="action.jpg" alt="Fantasy" className="w-20 h-20"/>
                    <span className="mt-2">Action</span>
                </div>
                
            </main>
        </div>
    );
  }