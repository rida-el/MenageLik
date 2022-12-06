import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./why.css";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const Why = () => {
  return (
    <div className="h-full">
      <div className="why-content text-center">
        <h1>Pourquoi les gens nous choisissent</h1>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-card w-[800px] h-[300px] bg-[#504a77] flex flex-col gap-[30px]">
            <h1>title</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              consequuntur aut amet fugiat! Sed beatae similique quibusdam
              voluptate cumque illum sequi blanditiis, veniam dolore voluptas
              aspernatur at tenetur laborum nobis?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          consequuntur aut amet fugiat! Sed beatae similique quibusdam voluptate
          cumque illum sequi blanditiis, veniam dolore voluptas aspernatur at
          tenetur laborum nobis?
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          consequuntur aut amet fugiat! Sed beatae similique quibusdam voluptate
          cumque illum sequi blanditiis, veniam dolore voluptas aspernatur at
          tenetur laborum nobis?
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          consequuntur aut amet fugiat! Sed beatae similique quibusdam voluptate
          cumque illum sequi blanditiis, veniam dolore voluptas aspernatur at
          tenetur laborum nobis?
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          consequuntur aut amet fugiat! Sed beatae similique quibusdam voluptate
          cumque illum sequi blanditiis, veniam dolore voluptas aspernatur at
          tenetur laborum nobis?
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          consequuntur aut amet fugiat! Sed beatae similique quibusdam voluptate
          cumque illum sequi blanditiis, veniam dolore voluptas aspernatur at
          tenetur laborum nobis?
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          consequuntur aut amet fugiat! Sed beatae similique quibusdam voluptate
          cumque illum sequi blanditiis, veniam dolore voluptas aspernatur at
          tenetur laborum nobis?
        </SwiperSlide>
        <SwiperSlide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
          consequuntur aut amet fugiat! Sed beatae similique quibusdam voluptate
          cumque illum sequi blanditiis, veniam dolore voluptas aspernatur at
          tenetur laborum nobis?
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Why;
