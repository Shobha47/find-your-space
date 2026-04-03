"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/src/components/ui/resizable-navbar"; // adjust path

import { useState } from "react";

export default function NavbarDemo() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { name: "Home", link: "/" },
    { name: "Features", link: "#features" },
    { name: "Pricing", link: "#pricing" },
  ];

  return (
    <Navbar>
      {/* ---------------- Desktop Navbar ---------------- */}
      <NavBody>
        <NavbarLogo />

        <NavItems items={items} />

        <div className="flex items-center gap-4 font-instrument">
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="dark" className="rounded-2xl ">Sign Up</NavbarButton>
        </div>
      </NavBody>

      {/* ---------------- Mobile Navbar ---------------- */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          {items.map((item, i) => (
            <a key={i} href={item.link} className="w-full">
              {item.name}
            </a>
          ))}

          <NavbarButton variant="gradient" className="w-full">
            Sign Up
          </NavbarButton>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}