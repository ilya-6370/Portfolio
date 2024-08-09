import Link from 'next/link'
// import React from 'react'
export function NavItem({children, ...p}) {
    return (
       <li className='py-4'><NavLink {...p}> {children}</NavLink></li>
    )
  }
  
export default function NavLink({children, ...p}) {
  return (
    <Link {...p} className='NavLink text-2xl transition-colors'>{children}</Link>
  )
}
