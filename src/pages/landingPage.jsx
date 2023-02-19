import React from 'react';
import { useDispatch } from 'react-redux';
import axios from "axios"
import * as API from '../redux/actions/index';
import Header from '../components/header';
import Banner from '../components/banner';
import Product from '../components/product';
import Person from '../assets/images/person.png';

const LandingPage = () => {
  const [editorsChoice, setEditorsChoice] = React.useState([]);
  const [latestArticles, setLatestArticles] = React.useState([]);
  const [latestReviews, setLatestReviews] = React.useState([]);
  const dispatch = useDispatch();

  const getAllData = () => {
    API.getAllData()
    // .then((res) => {
    //   console.log(res.data)
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  }

  React.useEffect(() => {
    // API.getAllData()
    axios.get('https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp')
      .then((res) => {
        console.log(res.data)
        setEditorsChoice(res.data["editor's choice"]);
        setLatestArticles(res.data['latest articles']);
        setLatestReviews(res.data['latest review']);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="mx-5 my-3 min-h-screen h-full">
      <Header />
      <Banner height="[50px]" width="[970px]" title="Top Frame 970x50" />
      <Banner height="[250px]" width="[970px]" title="Billboard 970x250" />
      <div className="w-[80%] mx-auto my-10">
        <h5 className="font-semibold">Editor's Choice</h5>
        <h6 className="font-semibold text-[#b2b2b0]">Curated with love</h6>
        {editorsChoice.length > 0 && (
          <div className="grid md:grid-cols-5 grid-cols-2 gap-4 my-4">
            {editorsChoice.map((item) => (
              <Product item={item} />
            ))}
          </div>
        )}
      </div>
      <div className="w-[85%] mx-auto bg-[#ffdad7] flex items-center p-3 mb-10">
        <div className="ml-[150px] w-1/2 p-5">
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
        {editorsChoice.length > 0 && (
          <div className="grid grid-cols-3 gap-5">
            {editorsChoice.slice(0, 3).map((item) => (
              <Product item={item} />
            ))}
          </div>
        )}
      </div>
      <Banner height="[250px]" width="[970px]" title="Billboard 970x250 (Internal Campaign Only)" />
      <div className="w-[80%] mx-auto my-10">
        <h5 className="font-semibold">Latest Articles</h5>
        <h6 className="font-semibold text-[#b2b2b0]">So you can make better purchase decision</h6>
        {latestArticles.length > 0 && (
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-4">
            {latestArticles.map((item, index) => (
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
        {latestReviews.length > 0 && (
          <div className="relative grid md:grid-cols-3 grid-cols-1 gap-5 my-4">
            {latestReviews.map((item, index) => (
              <div className="bg-white rounded-lg border-[1px] border-[#f0f0ee] overflow-hidden p-4" key={index}>
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
                <div className="absolute flex flex-col items-center z-50">
                  <img src={Person} alt="" className="rounded-full" />
                  <h6 className="text-[#6c6c6b] font-medium">{item?.user}</h6>
                  <p className="text-xs text-[#b3b3b1]">{item?.profile[0]}, {item?.profile[3]}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default LandingPage