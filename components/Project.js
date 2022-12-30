import React from "react";
import Link from "next/link";
import Image from "next/image";
import project1 from "../public/img/project1.png";
import project2 from "../public/img/project2.png";
import project3 from "../public/img/project3.png";
import project4 from "../public/img/project4.png";
import project5 from "../public/img/project5.png";
import project6 from "../public/img/project6.png";
import project7 from "../public/img/project7.png";
import project8 from "../public/img/project8.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Project() {
  return (
    <div>
      <div className="project">
        <Container>
          <h1 className="mainHeading mb-5 pb-5">Projects</h1>
          <Row>
            <Col lg={6}>
              <div className="projectCard">
                <Image src={project1} alt="" />
                <h1 className="subHeading">Inventory Tracker</h1>
                <p className="mainText">
                  Inventory Tracker made to track incoming shipments, <br />{" "}
                  outbound, and current inventory.
                </p>
                <Link href="" className="trend">
                  Web Design
                </Link>
                <Link href="" className="trend">
                  Web Devlopment{" "}
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="projectCard">
                <Image src={project2} alt="" />
                <h1 className="subHeading">Thirdwealth</h1>
                <p className="mainText">
                  Thirdwealth is an automated investing tool <br /> that helps
                  Africans living abroad easily invest <br /> in their financial
                  goals back home.
                </p>
                <Link href="" className="trend">
                  Web Design
                </Link>
                <Link href="" className="trend">
                  Web Devlopment{" "}
                </Link>
              </div>
            </Col>
          </Row>
          {/* row2 */}
          <Row>
            <Col lg={6}>
              <div className="projectCard">
                <Image src={project3} alt="" />
                <h1 className="subHeading">Tally</h1>
                <p className="mainText">Tally helps you pay off debt faster</p>
                <Link href="" className="trend">
                  Web Design
                </Link>
                <Link href="" className="trend">
                  Landing page{" "}
                </Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="projectCard">
                <Image src={project4} alt="" />
                <h1 className="subHeading">CoffeeUp</h1>
                <p className="mainText">
                  Order your coffee online and pick it up later
                </p>
                <Link href="" className="trend">
                  Web Design
                </Link>
                {/* <Link href="" className='trend'>Web Devlopment </Link> */}
              </div>
            </Col>
          </Row>
          {/* row3 */}
          <Row>
            <Col lg={6}>
              <div className="projectCard">
                <Image src={project5} alt="" />
                <h1 className="subHeading">Viome</h1>
                <p className="mainText">
                  Precision products engineered for your unique microbiome
                </p>
                <Link href="" className="trend">
                  Web Design
                </Link>
                {/* <Link href="" className='trend'>Landing page </Link> */}
              </div>
            </Col>
            <Col lg={6}>
              <div className="projectCard">
                <Image src={project6} alt="" />
                <h1 className="subHeading">Mikra</h1>
                <p className="mainText">
                  Mikra helps you restore your cellular health.
                </p>
                <Link href="" className="trend">
                  Web Design
                </Link>
                {/* <Link href="" className='trend'>Web Devlopment </Link> */}
              </div>
            </Col>
          </Row>
          {/* row4 */}
          <Row>
            <Col lg={6}>
              <div className="projectCard">
                <Image src={project7} alt="" />
                <h1 className="subHeading">Care/of</h1>
                <p className="mainText">
                  Care/of helps you on your path to achieve a higher standard of
                  your personal health
                </p>
                <Link href="" className="trend">
                  Web Design
                </Link>
                {/* <Link href="" className='trend'>Landing page </Link> */}
              </div>
            </Col>
            <Col lg={6}>
              <div className="projectCard">
                <Image src={project8} alt="" />
                <h1 className="subHeading">Harvest</h1>
                <p className="mainText">
                  Thirdwealth is an automated investing tool that helps Africans
                  living abroad easily invest in their financial goals back
                  home.
                </p>
                <Link href="" className="trend">
                  Web Design
                </Link>
                <Link href="" className="trend">
                  UI/UX Design{" "}
                </Link>
                <Link href="" className="trend last">
                  Web Devlopment{" "}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
