"use client"

import { useRouter } from "next/navigation"

function Contact() {

    const router = useRouter()

    const handleSendContactForm = () => {
        console.log('Formulaire envoyer')
        router.push('/')

    }
  return (
    <>
    <h1>Contact</h1>
    <button onClick={handleSendContactForm}>Submit</button>
    
    </>
  )
}

export default Contact