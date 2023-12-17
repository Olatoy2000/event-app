import Image from 'next/image'
import Link from 'next/link'
import { SignedOut } from "@clerk/nextjs";
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href="/" className='w-36'>
            <Image 
            width={128} height={38} alt='Evently logo'
            src="/assets/images/logo.svg"></Image>
        </Link>
        <div className='gap-3 justify-end flex w-32'>
            <SignedOut>
                <Button asChild className="rounded-full" size="lg">
                    <Link href="/sign-in">
                        Login
                    </Link>
                </Button>
            </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
