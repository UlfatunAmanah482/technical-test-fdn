/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import { setEditorsChoice, setLatestArticles, setLatestReview } from '../redux/actions/index';
import Header from '../components/header';
import Banner from '../components/banner';
import Product from '../components/product';
import Footer from '../components/footer';
import Nivea from '../assets/images/brands/nivea.png';
import TheOrdinary from '../assets/images/brands/the_ordinary.png';
import SKII from '../assets/images/brands/skII.png';
import TheBodyShop from '../assets/images/brands/the_body_shop.png';
import Maybelline from '../assets/images/brands/maybelline.png';
import Innisfree from '../assets/images/brands/innisfree.png';
import Profile1 from '../assets/images/profiles/profile1.png';
import Profile2 from '../assets/images/profiles/profile2.png';
import Profile3 from '../assets/images/profiles/profile3.png';
import Profile4 from '../assets/images/profiles/profile4.png';
import Product1 from '../assets/images/products/product1.png';
import Product2 from '../assets/images/products/product2.png';
import Product3 from '../assets/images/products/product3.png';
import Product4 from '../assets/images/products/product4.png';
import ImageBanner from '../assets/images/image_banner.png';
import BannerVideo1 from '../assets/images/banner_video1.png';
import BannerVideo2 from '../assets/images/banner_video2.png';
import BannerVideo3 from '../assets/images/banner_video3.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination'; import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

let popularGroups = [
  {
    id: "1",
    image: Profile1,
    title: "Embrace the Curl",
    description: "May our curls pop and never stop"
  },
  {
    id: "2",
    image: Profile2,
    title: "Embrace the Curl",
    description: "May our curls pop and never stop"
  },
  {
    id: "3",
    image: Profile3,
    title: "Embrace the Curl",
    description: "May our curls pop and never stop"
  },
  {
    id: "4",
    image: Profile4,
    title: "Embrace the Curl",
    description: "May our curls pop and never stop"
  },
]

let brands = [
  {
    id: "1",
    image: Nivea,
  },
  {
    id: "2",
    image: TheOrdinary,
  },
  {
    id: "3",
    image: SKII,
  },
  {
    id: "4",
    image: TheBodyShop,
  },
  {
    id: "5",
    image: Maybelline,
  },
  {
    id: "6",
    image: Innisfree,
  },
]

let trending = [
  {
    id: "1",
    image: Product1,
    name: "CKINCEUTICALS",
    description: "C E Ferulic",
    rating: 4.9
  },
  {
    id: "2",
    image: Product2,
    name: "CKINCEUTICALS",
    description: "C E Ferulic",
    rating: 4.9
  },
  {
    id: "3",
    image: Product3,
    name: "CKINCEUTICALS",
    description: "C E Ferulic",
    rating: 4.9
  },
  {
    id: "4",
    image: Product4,
    name: "CKINCEUTICALS",
    description: "C E Ferulic",
    rating: 4.9
  },
  {
    id: "5",
    image: Product1,
    name: "CKINCEUTICALS",
    description: "C E Ferulic",
    rating: 4.9
  },
  {
    id: "6",
    image: Product2,
    name: "CKINCEUTICALS",
    description: "C E Ferulic",
    rating: 4.9
  },
]

const LandingPage = () => {
  const data = useSelector(state => state.data);
  const dispatch = useDispatch();

  const getAllData = async () => {
    await axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
      .then((res) => {
        dispatch(setEditorsChoice(res.data["editor's choice"]));
        dispatch(setLatestArticles(res.data["latest articles"]));
        dispatch(setLatestReview(res.data["latest review"]));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    getAllData();
    console.log(data)
  }, [])

  return (
    <div className="mx-5 my-3 min-h-screen h-full">
      <Header />
      <Banner type="small" title="Top Frame 970x50" />
      <Banner type="large" title="Billboard 970x250" />
      <div className="w-[80%] mx-auto my-10">
        <h5 className="font-semibold">Editor's Choice</h5>
        <h6 className="font-semibold text-[#b2b2b0]">Curated with love</h6>
        {data?.editorsChoice?.length > 0 && (
          <div className="grid md:grid-cols-5 relative grid-cols-2 gap-4 mb-4 mt-12">
            {data?.editorsChoice?.map((item, index) => (
              <div>
                <div className="absolute flex items-center gap-3 z-50 -top-[40px] ml-5">
                  <img src={Profile1} alt="" className="rounded-full" width={50} />
                  <div>
                    <h6 className="text-[#6c6c6b] text-sm font-medium">{item?.editor}</h6>
                    <p className="text-xs text-[#b3b3b1]">{item?.role}</p>
                  </div>
                </div>
                <Product item={item} key={index} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-[85%] mx-auto bg-[#ffdad7] flex items-center mb-10">
        <img src={ImageBanner} alt="" />
        <div className="w-1/2 p-5">
          <b>Looking for products that are just simply perfect for you?</b>
          <p className="font-medium">Hereare some products that we believe match your skin, hair, and body! Have we mentioned that thet solve your concerns too?</p>
          <div className="text-end">
            <button
              type="button"
              className="text-white py-3 px-4 rounded-sm bg-[#ff292c] mt-4"
            >
              See My Matches
            </button>
          </div>
        </div>
        {data?.editorsChoice?.length > 0 && (
          <div className="grid grid-cols-3 gap-5 mx-4">
            {data?.editorsChoice?.slice(0, 3).map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        )}
      </div>
      <Banner type="large" title="Billboard 970x250 (Internal Campaign Only)" />
      <div className="w-[80%] mx-auto my-10">
        <h5 className="font-semibold">Latest Articles</h5>
        <h6 className="font-semibold text-[#b2b2b0]">So you can make better purchase decision</h6>
        {data?.latestArticles?.length > 0 && (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-4">
            {data?.latestArticles?.map((item, index) => (
              <div className="overflow-hidden" key={index}>
                <img src={item?.image} alt="" className="rounded-lg" />
                <div className="py-3">
                  <h5 className="uppercase font-bold">{item?.title}</h5>
                  <div className="flex items-center gap-3 divide-x-2 divide-[#d9d9d7]">
                    <h6 className="text-[#9b9b9a] font-medium">{item?.author}</h6>
                    <h6 className="text-[#cbcbc9] md:text-sm text-xs pl-3 font-medium">{item?.published_at}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-[80%] mx-auto my-10">
        <h5 className="font-semibold">Latest Reviews</h5>
        <div className="flex justify-between items-center gap-4">
          <h6 className="font-semibold text-[#b2b2b0]">So you can make better purchase decision</h6>
          <a href="/" className="text-[#ff7879]">{`See more >`}</a>
        </div>
        {data?.latestReview?.length > 0 && (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data?.latestReview?.map((item, index) => (
              <SwiperSlide>
                <div className="bg-white" key={index}>
                  <div className=" rounded-lg border-[1px] border-[#f0f0ee] overflow-hidden p-4 mb-5">
                  <div className="flex gap-4 items-center pb-4">
                    <img src={item?.product?.image} alt="" className="w-[50px] h-[50px] object-contain" />
                    <div>
                      <h5 className="md:text-base text-sm font-bold uppercase">{item?.product?.name}</h5>
                      <h6 className="md:text-sm text-xs text-[#191919] font-medium">{item?.product?.desc}</h6>
                    </div>
                  </div>
                  <hr />
                  <div className="pt-3">
                    <p className="text-[#6c6c6b] font-medium">{item?.comment}</p>
                  </div>
                  </div>
                  <div className="flex flex-col items-center z-50 -mt-[40px]">
                    <img src={Profile1} alt="" className="rounded-full" width={50} />
                    <h6 className="text-[#6c6c6b] text-sm font-medium">{item?.user}</h6>
                    <p className="text-xs text-[#b3b3b1]">{item?.profile[0]}, {item?.profile[3]}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="w-[80%] mx-auto mb-10 mt-20">
        <h5 className="font-semibold">Popular Groups</h5>
        <div className="flex justify-between items-center gap-4">
          <h6 className="font-semibold text-[#b2b2b0]">Where the beauty TALK are</h6>
          <a href="/" className="text-[#ff7879]">{`See more >`}</a>
        </div>
        {popularGroups.length > 0 && (
          <div className="relative grid md:grid-cols-4 grid-cols-2 gap-5 my-4">
            {popularGroups.map((item, index) => (
              <div className="bg-white flex flex-col gap-4 items-center rounded-lg border-[1px] border-[#f0f0ee] overflow-hidden p-4 shadow-lg" key={index}>
                <img src={item.image} alt="" className="rounded-full w-[150px]" />
                <h5 className="md:text-xl text-lg font-bold">{item.title}</h5>
                <div className="flex justify-between items-center gap-4 mt-5">
                  <img src="https://img.icons8.com/ios-glyphs/30/null/user-female--v1.png" alt="" />
                  <img src="https://img.icons8.com/ios-glyphs/30/null/overview-pages-3--v1.png" alt="" />
                  <img src="https://img.icons8.com/windows/30/null/chat-message.png" alt="" />
                </div>
                <p className="md:text-sm text-xs font-medium text-center">{item.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-[80%] mx-auto my-10">
        <h5 className="font-semibold">Latest Videos</h5>
        <div className="flex justify-between items-center gap-4">
          <h6 className="font-semibold text-[#b2b2b0]">Watch and learn, ladies</h6>
          <a href="/" className="text-[#ff7879]">{`See more >`}</a>
        </div>
        <div className="relative grid md:grid-cols-3 grid-cols-1 gap-3 my-4">
          <img src={BannerVideo1} alt="" className="h-full col-span-2" />
          <div className="grid grid-rows-2 gap-5">
            <img src={BannerVideo2} alt="" />
            <img src={BannerVideo3} alt="" />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto my-10">
        <h5 className="font-semibold">Trending This Week</h5>
        <h6 className="font-semibold text-[#b2b2b0]">See our weekly most reviewed products</h6>
        {trending.length > 0 && (
          <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4 my-4">
            {trending.map((item, index) => (
              <Product item={item} key={index} />
            ))}
          </div>
        )}
      </div>
      <div className="w-[80%] mx-auto my-10">
        <h5 className="font-semibold">Top Brands</h5>
        <div className="flex justify-between items-center gap-4">
          <h6 className="font-semibold text-[#b2b2b0]">We all know and love</h6>
          <a href="/" className="text-[#ff7879]">{`See more >`}</a>
        </div>
        {brands.length > 0 && (
          <div className="relative grid md:grid-cols-6 grid-cols-3 gap-5 my-4">
            {brands.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="" />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="w-[80%] mx-auto mt-4 mb-10">
        <h5 className="md:text-xl text-lg font-bold">
          Female Daily - Find everything you want to know about beauty on Female Daily
        </h5>
        <p className="md:text-base text-sm font-medium">
          Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauy Tutorials, Discussions, Beauty Workshops, anything!
          <br />
          We are here to be your friendly solution to all things beauty, inside and out!
        </p>
      </div>
      <hr />
      <Footer />
    </div>
  )
}

export default LandingPage