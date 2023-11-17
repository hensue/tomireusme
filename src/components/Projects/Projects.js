import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import translator from "../../Assets/Projects/translator.jpg";
import social from "../../Assets/Projects/social.jpg";
import shopify from "../../Assets/Projects/shopify.jpg";
import rope from "../../Assets/Projects/rope.jpg";
import qrcode from "../../Assets/Projects/qrcode.jpg";
import app from "../../Assets/Projects/app.jpg";
import cake from "../../Assets/Projects/cake.jpg";
import skin from "../../Assets/Projects/skin.jpg";
import food from "../../Assets/Projects/food.jpg";
import extension from "../../Assets/Projects/extension.jpg";
import Ethermail from "../../Assets/Projects/Ethermail.jpg";


import fan from "../../Assets/Projects/fan.jpg";
import beauty from "../../Assets/Projects/beauty.jpg";
import golf from "../../Assets/Projects/golf.jpg";
import baby from "../../Assets/Projects/baby.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beauty}
              isBlog={false}
              title="Beauty4u - WordPress Store"
              description="Cloned complete WordPress store below to the letter after completion, I have done little tweak on the wording then will be transfered to client's hosting&Domain."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://beauty4u.world/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cake}
              isBlog={false}
              title="Bakery WordPress website"
              description="Build a Bakery website using WORDPRESS (WooCommerce + Elementor)"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://uptownchunk.com.au/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skin}
              isBlog={false}
              title="Skin care and make up services"
              description="I have done the complete design & development. The website is built in WordPress."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://beautifulyoubychristine.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baby}
              isBlog={false}
              title="E-Commerce (Shopify)"
              description="Added pages (BROWSE ALL, FOR MOTHERS, FOR BABIES ,BUNDLE & SAVE ,HELP, ABOUT US etc.)"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://naturebondglobal.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
              isBlog={false}
              title="Custom Shopify App for Shopify Plus client"
              description="Created custom private shopify app offering Upsell products and user input like name, date, song without using any app."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://amourprints.com/products/song-lyrics-canvas-custom-art-print-wedding-name"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rope}
              isBlog={false}
              title="Shopify Rope Website"
              description="Created Shopify Rope Website."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://www.crossrope.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={qrcode}
              isBlog={false}
              title="QR code scanner (Figma)"
              description="QR code scanner app has a clean and user-friendly design that makes it easy for users to quickly scan and access information from QR codes. The app's simplicity and intuitive interface are key factors in its usability and appeal to users."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.figma.com/proto/kqfOLxemhcLE0IjvlBl6KB/Funprime?page-id=0%3A1&node-id=21-7037&viewport=374%2C357%2C0.13&scaling=scale-down&starting-point-node-id=21%3A7037"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={app}
              isBlog={false}
              title="Super App Design (Figma)"
              description="This app has a user-friendly design and clean. It's very smart."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://www.figma.com/proto/iExJ06QCXOBGPWxgyHAdls/Super-App?page-id=0%3A1&node-id=1-2&viewport=275%2C63%2C0.03&scaling=scale-down&starting-point-node-id=1%3A2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translator}
              isBlog={false}
              title="Translator Landing page"
              description="This project is about converting the landing page into Next.js with TailwindCss page. Client comes up with a very good landing page and just want the front end development service and i did it with 5 star rating."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="http://www.translator.company/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={golf}
              isBlog={false}
              title="Tour Golf League - Golf Lessons Booking System"
              description="Integrated Stripe API for lesson fee transaction between instructors, students, and platform."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://tour-golf-league-b87f3.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={extension}
              isBlog={false}
              title="Chrome Extension Development"
              description="Chrome extension development using React"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://chrome.google.com/webstore/detail/coursology/ldgogjlogbecagpdpfomiiebiaeilgpd"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={social}
              isBlog={false}
              title="Social Media APP  React, Redux, MUI, TypeScript"
              description="Interact with fellow meme enthusiasts through likes, comments, and shares. Engage in lively discussions, tag your friends, and spread the joy of laughter across the app's vibrant community."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://memebiz-landing-page.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Catering  WordPress Elementor Website"
              description="The project involved developing a visually appealing catering website using Elementor. The focus was on creating a schedule form for customers to request catering services. The website design was customized using Elementor's drag-and-drop builder, and the form was integrated seamlessly with the catering business's workflow. The site was optimized for responsiveness, SEO, and performance to enhance the user experience and attract more customers."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://freshjuliennecatering.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ethermail}
              isBlog={false}
              title="Ethermail"
              description="Ethermail is a smart software - to have an email service based on Web3. I was working on maintaining the project and creating mobile apps from scratch"
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://ethermail.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fan}
              isBlog={false}
              title="Calaways Solutions - WP Website Developed with Divi Theme Builder"
              description="Using my expertise in WordPress development, I was able to successfully convert the PSD design into a fully responsive and user-friendly website. The conversion process involved carefully coding the website's HTML, CSS, and JavaScript to ensure that it was optimized for web and mobile devices."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://calawaysolutions.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
