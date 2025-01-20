import React from 'react'

export default async function Product({params} : {
    params: Promise<{idProduct: string}>
}) {
    const idProduct = (await params).idProduct
    return (
        <div>Product {idProduct}</div>
    )
}
