import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="w-full bg-purple-400 p-6 flex justify-between">
      <Link href="/">
        <a className="text-white bg-green-500 p-2 rounded">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-white bg-green-500 p-2 rounded">About</a>
      </Link>
    </nav>
  )
}
