/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

const Product = (props) => {
  const [data, setData] = React.useState({});
  
  React.useEffect(() => {
    setData(props.item);
  }, [])

  return (
    <div className="bg-white rounded-lg border-[1px] border-[#f0f0ee] overflow-hidden">
      <img src={data?.product?.image} alt="" />
      <div className="p-3">
        <h5 className="uppercase font-bold">{data?.product?.name}</h5>
        <p className="font-medium">{data?.product?.description}</p>
      </div>
    </div>
  )
}

export default Product