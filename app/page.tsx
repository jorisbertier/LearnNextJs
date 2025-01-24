"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([])

  const fetchFoods = async () => {
    try {
      const res = await fetch('/api');
      const data = await res.json();
      setData(data)

    }catch(e) {
      console.log(e)    
    }
  }

  useEffect(() => {
      fetchFoods()
  }, [])

  console.log(data)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol> 
        <h1>My products</h1>
        {data.map((item, index) => (
          <div key={index}>
            <h1>Product {item.id}</h1>
            <p>{item.title}</p>
          </div>
        ))}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
        
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Read our docs
          </a>
        </div>
            <Button size="lg"><Link href='/dashboard'>
            Dashboard
            </Link></Button>
            <Button><Link href='/profil'>
            Profil
            </Link></Button>
            <Button><Link href='/stat'>
            Stats
            </Link></Button>
            <Button><Link href='/product'>
            Product
            </Link></Button>

            <Button><Link href='/contact'>
            Contact
            </Link></Button>
      </main>
    </div>
  );
}
