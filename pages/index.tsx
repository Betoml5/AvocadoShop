import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Link from 'next/link'
import AvocadoHeader from "@components/AvocadoHeader/AvocadoHeader";
import AvocadoProduct from '@components/AvocadoProduct/AvocadoProduct';

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ length, data }) => {
        setProductList(data)
        console.log(data);
      })
  }, [])

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3">
      <AvocadoHeader />
      {productList.map((product) => (
        <div>
          <AvocadoProduct product={product}/>
        </div>
      ))}
    </div>
  )
}

export default HomePage
