import Link from 'next/link'
// import React from 'react'

export default function NavLink({children, ...p}) {
  return (
    <Link {...p} className='NavLink text-2xl'>{children}</Link>
  )
}
