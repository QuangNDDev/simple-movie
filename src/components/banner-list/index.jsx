import useSWR from "swr";
import { fetcher } from "../../config/config";
import { useEffect, useState } from "react";
import BannerItem from "../banner-item";
import { SwiperSlide, Swiper } from "swiper/react";

import { Autoplay } from "swiper/modules";

function BannerList() {
  const [bannerList, setBannerList] = useState([]);
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=e050194db86d849bf31a7f92702a922e`,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setBannerList(data.results);
    }
  }, [data]);
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {bannerList.length > 0 &&
          bannerList.map((bannerItem) => (
            <SwiperSlide key={bannerItem.id}>
              <BannerItem bannerItem={bannerItem} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

export default BannerList;
