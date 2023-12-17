import Image from 'next/image'
import Link from 'next/link'
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button"
import NavbarItems from './NavbarItems';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className='w-full border-b'>
      <div className='wrapper flex items-center justify-between'>
        <Link href="/" className='w-36'>
            <Image 
            width={128} height={38} alt='Evently logo'
            src="/assets/images/logo.svg"></Image>
        </Link>

        <SignedIn>
          <nav className='md:flex-between hidden w-full max-w-xs'>
            <NavbarItems />
          </nav>
        </SignedIn>
        <div className='gap-3 justify-end flex w-32'>
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
                <MobileNav />
            </SignedIn>
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
