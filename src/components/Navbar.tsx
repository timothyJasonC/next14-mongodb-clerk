import { UserButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'


export default function Navbar() {
    return (
        <div>
            <ul className='flex justify-between m-10 items-center'>
                <div>
                    <Link href={'/'}>
                        <li>Home</li>
                    </Link>
                </div>
                <div className='flex gap-10'>
                    <SignedOut>
                        <Link href={'/sign-in'}>
                            <li>Login</li>
                        </Link>
                        <Link href={'/sign-up'}>
                            <li>Sign up</li>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <Link href={'/profile'}>
                            <li>Profile</li>
                        </Link>
                        <li>
                            <UserButton afterSignOutUrl='/'/>
                        </li>
                    </SignedIn>
                </div>
            </ul>
        </div>
    )
}
