import React from "react";
import headerlogo from "../public/img/headerlogo.svg";
import Image from "next/image";
import Link from "next/link";
import { Container } from "react-bootstrap";
export default function Nav() {
  return (
    <div>
      <header className="pageHeader">
        <Container>
          <Link href={""} className="brandLink">
            <Image src={headerlogo} alt="" />
          </Link>
          <Link href={""} className="headerLink">
            Our work
          </Link>
          <Link href={""} className="headerLink">
            Contact
          </Link>
        </Container>
      </header>
    </div>
  );
}
