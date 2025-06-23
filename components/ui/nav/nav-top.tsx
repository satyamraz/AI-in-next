"use client";
import {
  ClerkProvider,
  useUser,
  RedirectToSignIn,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Dashboard from '@/app/dashboard/page'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link";
import { Button } from "../button";
export default function NavTop() {
    const { isSignedIn, user, isLoaded } = useUser();
    console.log("User:", user);
    console.log("isSignedIn:", isSignedIn); 
    const {theme, setTheme} = useTheme();
  return (
    <nav
      className="
        m-5 flex 
        rows
        space-y-4 
        items-center 
        hover:shadow-sm 
        transition-shadow 
        duration-300"
    >
        { isSignedIn && isLoaded && user? 
        <Link href="/dashboard" 
        className="
        flex items-center space-x-2
         hover:text-blue-400"
        >
          {user.firstName + ' '} Dashboard
        </Link>:<RedirectToSignIn redirectUrl="/dashboard" />}
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      <SignedOut >
        <SignInButton />
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
}


