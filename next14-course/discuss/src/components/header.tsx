import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import HeaderAuth from "./headerAuth";
import SearchInput from "./searchInput";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <SearchInput />
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
