import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function Product() {
  return (
    <div>
        <Button><Link href='/product/1'>Product 1 </Link></Button>
        <Button><Link href='/product/iphone'>Product iphone</Link></Button>
        </div>
  )
}
