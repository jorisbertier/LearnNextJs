import Link from 'next/link'
import React from 'react'

export default async function Product({params} : {
    params: Promise<{idProduct: string}>
}) {
    const idProduct = (await params).idProduct
    return (
        <>
            <div>Product {idProduct}</div>
            <Link href={`/product/${idProduct}/comments/1`}>Comment 1</Link>
            <Link href={`/product/${idProduct}/comments/2`}>Comment 2</Link>
            <Link href={`/product/${idProduct}/comments/3`}>Comment 3</Link>
        </>
    )
}
