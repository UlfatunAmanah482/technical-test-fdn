import React from 'react'

const Banner = (props) => {
  return (
    <section className="mt-2">
      {props.type === "small" ? (
        <div className="h-[50px] w-[970px] bg-[#d8d8d6] mx-auto flex items-center justify-center border-[1.5px] border-[#b7b7b5] p-2 mb-4">
          <b className="text-[#5c5c5b] text-xl">{props.title}</b>
        </div>
      ) : (
        <div className="h-[250px] w-[970px] bg-[#d8d8d6] mx-auto flex items-center justify-center border-[1.5px] border-[#b7b7b5] p-2 mb-4">
          <b className="text-[#5c5c5b] text-xl">{props.title}</b>
        </div>
      )}
    </section>
  )
}

export default Banner