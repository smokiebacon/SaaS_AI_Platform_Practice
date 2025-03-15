"use client"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
const Sidebar = () => {
  const pathname = usePathname()
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/">
          <Image
            alt="logo"
            src="/assets/images/logo-text.svg"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link, index) => {
                const isActive = link.route === pathname
                return (
                  <li
                    key={index}
                    className={`sidebar-nav_element group  ${isActive}
                      ? "bg-purple-gradient text-white"
                      : "text-gray-500"
                  `}
                  >
                    <Link href={link.route} className="sidebar-link">
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link, index) => {
                const isActive = link.route === pathname
                return (
                  <li key={index}>
                    <Link
                      href={link.route}
                      className={`sidebar-nav_element group ${
                        isActive
                          ? "bg-purple-gradient text-white"
                          : "text-gray-500"
                      }`}
                    >
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-out">Log Out</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
