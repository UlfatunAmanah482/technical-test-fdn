import React from 'react';

let categories = [
  {
    id: "1",
    title: "Skincare",
    url: "/"
  },
  {
    id: "2",
    title: "Make Up",
    url: "/"
  },
  {
    id: "3",
    title: "Body",
    url: "/"
  },
  {
    id: "4",
    title: "Hair",
    url: "/"
  },
  {
    id: "5",
    title: "Fragrance",
    url: "/"
  },
  {
    id: "6",
    title: "Nails",
    url: "/"
  },
  {
    id: "7",
    title: "Tools",
    url: "/"
  },
  {
    id: "8",
    title: "Brands",
    url: "/"
  },
]

const Header = () => {
  return (
    <section className="mb-3">
      <div className="flex items-center justify-between gap-5 mb-3">
        <img src="https://img.icons8.com/ios-glyphs/30/null/overview-pages-3--v1.png" alt="" />
        <form action="" className="w-full">
          <div className="relative flex items-center text-gray-400">
            <img src="https://img.icons8.com/ios/25/848383/search--v1.png" alt="" className="absolute pointer-events-none ml-2" />
            <input
              type="text"
              name="search"
              placeholder='Search products, articles, topics, brands, etc'
              className="w-full text-gray-400 font-medium placeholder-gray-400 rounded-[4px] border-none ring-2 ring-gray-200 focus:outline-2 focus:outline-gray-300 text-sm py-2 pr-3 pl-10"
            />
          </div>
        </form>
        <button className="bg-[#ff292c] p-4 text-white w-1/6 flex items-center justify-center gap-4 text-xs">
          <img src="https://img.icons8.com/pastel-glyph/20/FFFFFF/gender-neutral-user.png" alt="" />
          <span>LOGIN / DAFTAR</span>
        </button>
      </div>
      <hr />
      <div className="flex items-center justify-center my-2">
        {categories.map((item) => (
          <a href={item.url} key={item.id} className="uppercase mx-4">
            <b>{item.title}</b>
          </a>
        ))}
      </div>
      <hr />
    </section>
  )
}

export default Header
