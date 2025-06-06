'use client';
import { SignedIn,  UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { dark } from '@clerk/themes'
import { cn } from '@/lib/utils';
import home from "../../public/assets/home.svg"
import upcoming from "../../public/assets/upcoming.svg"
import previous from "../../public/assets/previous.svg"
import recordings from "../../public/assets/recordings.svg"
import myRoom from "../../public/assets/myRoom.svg"





export const navLinks = [
  {
    imgURL: home,
    route: '/',
    label: 'Home',
  },

  {
    imgURL: upcoming,
    route: "/upcoming",
    label: 'Upcoming',
  },
  {
    imgURL: previous,
    route: '/previous',
    label: 'Previous',
  },
  {
    imgURL: recordings,
    route: '/recordings',
    label: 'Recordings',
  },
  {
    imgURL: myRoom,
    route: '/my-room',
    label: 'My Room',
  },
];
const NavBar = () => {
  const pathname = usePathname();

    return (
        <>
          <nav className="flex justify-between items-center fixed z-50 w-full h-28 px-10 gap-4 shadow-2xl bg-black bg-opacity-100">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-1 hover:scale-150 duration-500 ">
                <Image
                  src="/assets/logo.svg"
                  width={60}
                  height={60}
                  alt="Let's talk"
                />
              </Link>

              {/* Nav Links */}
              <section className="sticky top-0 flex justify-between text-white ">
                <div className="flex flex-1 max-sm:gap-0 sm:gap-6">
                  {navLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    
                    return (
                      <Link
                        href={item.route}
                        key={item.label}
                        className={
                          cn('flex gap-4 items-center p-4 rounded-lg justify-start hover:scale-150 duration-300 ',
                            isActive && 'bg-blue-100 rounded-3xl'
                          )
                        }
                      >
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={24}
                          height={24}
                        />
                        
                        
                        
                        <p className={cn(
                            "text-lg font-semibold max-lg:hidden",
                          )}>
                          {item.label}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </section>

              {/* User button */}
              <div className='hover:scale-150 duration-500 '>
                <SignedIn>
                    {/* Mount the UserButton component */}
                    <UserButton
                      appearance={{
                        baseTheme: dark,
                      }}
                    />
                </SignedIn>
        
              </div>
          </nav>
        </>
    )
}

export default NavBar