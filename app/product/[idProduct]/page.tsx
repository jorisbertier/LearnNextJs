import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import { Metadata } from 'next'

export const generateMetadata =({params} : { params: { idProduct: string }}) : Metadata => {
    const { idProduct } = params;
    return {
        title:`Product ${idProduct}`
    }
}

export default async function Product({params} : {
    params: Promise<{idProduct: string}>
}) {
    const idProduct = (await params).idProduct

    if(parseInt(idProduct) > 50) {
        notFound()
    }
    return (
        <>
            <div>Product {idProduct}</div>
            <Link href={`/product/${idProduct}/comments/1`}>Comment 1</Link>
            <Link href={`/product/${idProduct}/comments/2`}>Comment 2</Link>
            <Link href={`/product/${idProduct}/comments/3`}>Comment 3</Link>
        </>
    )
}
