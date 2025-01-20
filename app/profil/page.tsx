import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function ProfilId() {
  return (
    <>
    <Button><Link href="/profil/1">Profile 1</Link></Button>
    <Button><Link href="/profil/2">Profile 2</Link></Button>
    </>
  )
}
