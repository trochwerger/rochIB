/*********************************************************************************
 *  WEB422 – Assignment 4
 *
 *  I declare that this assignment is my own work in accordance with Seneca's
 *  Academic Integrity Policy:
 *
 *  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
 *
 *  Name: Tomas Rochwerger Student ID: 159432210 Date: 03/13/2024
 *
 ********************************************************************************/

import { Container } from "postcss";
import { Image, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Row>
        <Image src="/homeBackground1.jpg" fluid rounded alt="Buildings" />
      </Row>
      <br />
      <br />
      <Row className="mt-50">
        <Col>
          <h3>Welcome to RochIB</h3>
          <br />
          <p>
            Welcome to RochIB, your premier partner in engineering solutions for
            the oil and gas industry. With our specialized expertise and
            extensive network, we facilitate connections between Canadian
            equipment companies and the thriving markets of Latin America. From
            concept to implementation, we're committed to delivering top-notch
            engineering solutions that drive success and growth for our clients.
          </p>
          <br />
        </Col>
      </Row>
      <Row className="bg-green-300 p-10 m-10">
        <Row className="">
          <Col>
            <h4>Our Expertise</h4>
            <br />
          </Col>
          <Col>
            <p>
              At RochIB, we specialize in providing engineering solutions
              tailored to the unique needs of the oil and gas sector. From
              exploration and production to refining and distribution, our team
              has the knowledge and experience to support every stage of the
              value chain. With a focus on efficiency, reliability, and
              sustainability, we help Canadian equipment companies navigate the
              complexities of the Latin American market and capitalize on
              emerging opportunities.
            </p>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h4>Client-Centric Approach</h4>
          </Col>
          <Col>
            <p>
              Your success is our priority at RochIB. We understand the
              challenges and opportunities facing Canadian equipment companies
              looking to expand into Latin America. That's why we take a
              personalized approach to every project, working closely with our
              clients to understand their goals and develop tailored solutions
              that meet their specific requirements. With our dedicated support
              and expertise, we're here to help you achieve your business
              objectives and drive growth in new markets.
            </p>
            <br />
            {/* <Image src="/clients.jpg" fluid rounded alt="Buildings" /> */}
          </Col>
        </Row>
        <br />
        <Row className="">
          <Col>
            <h4>Innovation Solutions</h4>
          </Col>
          <Col>
            <p>
              Innovation is at the heart of everything we do at RochIB. Our team
              of skilled engineers and construction professionals is constantly
              pushing the boundaries to deliver cutting-edge solutions. Whether
              it's implementing the latest technologies or adopting sustainable
              practices, we're committed to finding innovative ways to optimize
              efficiency, minimize costs, and maximize value for our clients.
            </p>
          </Col>
        </Row>
      </Row>
      <Row className="text-justify text-center">
        <Col>
          <h4>Why Choose Us</h4>
          <p>
            When you choose RochIB, you're choosing a partner who understands
            the intricacies of the oil and gas industry and the dynamics of the
            Latin American market. With our deep industry knowledge, extensive
            network, and proven track record of success, we have the expertise
            to help you navigate challenges, capitalize on opportunities, and
            achieve sustainable growth. Trust RochIB to be your bridge to
            success in Latin America's oil and gas sector.
          </p>
        </Col>
      </Row>
    </>
  );
}
