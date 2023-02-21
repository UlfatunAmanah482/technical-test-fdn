/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

const Product = (props) => {
  const [data, setData] = React.useState({});
  
  React.useEffect(() => {
    setData(props.item);
  }, [])

  return (
    <div className={`${props.border ? "border-[1px] border-[#f0f0ee]" : ""} bg-white rounded-lg overflow-hidden`} key={props.index}>
      <img src={data?.product?.image || data?.image} alt="" className="mx-auto w-full h-[200px] object-contain" />
      <div className="p-3">
        <h5 className="uppercase font-bold">{data?.product?.name || data?.name}</h5>
        <p className="font-medium">{data?.product?.description || data?.description}</p>
        <h6 className="font-semibold text-[#b2b2b0] text-sm">{data?.variant}</h6>
      </div>
    </div>
  )
}

export default Product