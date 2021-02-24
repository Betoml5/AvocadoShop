import React, { useEffect, useState } from 'react'
import AvocadoProductDetail from '@components/AvocadoProductDetail/AvocadoProductDetail'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>(null)
  const { query } = useRouter()

  useEffect(() => {
    query.id &&
      window
        .fetch(`/api/avo/${query.id}`)
        .then((res) => res.json())
        .then((res) => setProduct(res.avo))
        .catch((e) => console.log(e.message))
  })

  return (
    <section>{product && <AvocadoProductDetail product={product} />}</section>
  )
}

export default ProductPage
