import { Button } from "@/components/Button";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import ProjectItem from "@/components/ProjectItem";
import Section from "@/components/Section";
import ServiceItem from "@/components/ServiceItem";
import SocialLinks from "@/components/SocialLinks";
import Testimonials from "@/components/Testimonials";
import { projects, services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {/* HERO */}
      <div className="wrap min-h-screen flex flex-col gap-16 items-center justify-center relative">
        <h1 className="text-5xl md:text-[calc(1.8rem+3vw)] leading-[1.2]  font-semibold text-center ">
          <span className="text-grey-2">You do the </span>
          Scouting, <br /> <span className="text-grey-2">
            We'll handle your
          </span>{" "}
          Digital Routing.
        </h1>
        <Button asChild>
          <Link href="#testimonial">Touch here
          for your Digital Evolution</Link>
        </Button>
        <a
          href="#about"
          className="absolute right-1/5 -translate-y1/2 bottom-5 flex flex-col items-center group"
        >
          <div className="relative w-10 h-[70px] border-2 group-hover:border-foreground rounded-full transition-colors">
            <div className="w-1 h-2.5 bg-accent rounded-full absolute left-1/2 -translate-x-1/2 scroll-animation"></div>
          </div>
          <div className="arrow mt-5">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>

      {/* ABOUT SECTION */}
      <Section id="about">
        <div className="wrap flex flex-col gap-16 justify-center">
          <div className="flex justify-between items-center  w-full">
            <h5 className="text-grey-2 text-sm">About Us</h5>
            <SocialLinks />
          </div>
          <div>
            <div className="text-justify  md:text-2xl text-grey-2 ">
              <div className="float-right wrap-around pl-6 md:pl-20 mb-2 ">
                <div className="w-28 md:w-60 h-28 md:h-60 relative">
                  <Image
                    src={"/user.jpg"}
                    alt=""
                    fill
                    className="rounded-full"
                  />
                </div>
              </div>
              <p>
              VEZÉT is a global leader in digital services, offering a comprehensive range of solutions, from freelance project outsourcing to expert-led tutoring. Over the years, we have proudly collaborated with prestigious institutions such as the University of Shargam, Lovely Professional University, and even international universities like London's top-tier institutions and Capella University. Our expertise spans across disciplines, and we’ve worked with students, professionals, and businesses worldwide.


              </p>

              <p className="mt-16">
              At VEZÉT, we take pride in outsourcing work to the best experts in the industry, ensuring every project receives the highest level of professionalism and accuracy. Whether it’s tutoring, freelance design, or digital services, we focus on delivering tailored solutions that meet the specific needs of our clients. Our mission is to provide seamless, high-quality, and efficient services across the globe.

              </p>
              <p className="mt-16 max-sm:hidden">
              Finally, We deliver everything your business needs—from strategy to app development—all in one place. With our expert team, you get seamless, efficient solutions without needing to look elsewhere.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* PROJECTS SECTION */}
      <Section id="projects" className="overflow-hidden">
        <div className="wrap flex flex-col gap-5  justify-center ">
          <h5 className="text-grey-2 text-sm">Recent Projects</h5>
          <p className="text-lg md:text-2xl max-w-lg mb-10">
          We craft innovative digital solutions that blend our passion for design and development, delivering exceptional user experiences and impactful results tailored to each client’s needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10  ">
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
          <Button
            asChild
            variant={"secondary"}
            size={"lg"}
            className="mt-5 w-max mx-auto"
          >
            <Link href="/#Contact">Hire us now</Link>
          </Button>
        </div>
      </Section>

      {/* SERVICES SECTION */}
      <Section id="services">
        <div className="wrap flex flex-col gap-5  justify-center">
          <h5 className="text-grey-2 text-sm">What Do I Do And How?</h5>
          <p className="text-lg md:text-2xl max-w-lg mb-10">
          At VEZÉT, we thrive on crafting functional solutions for unique challenges. Below are some key skills we've developed throughout our journey.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 md:gap-10">
            {services.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>
          <Process />
        </div>
      </Section>

      {/* TESTIMONIAL SECTION */}
      <Section id="testimonial">
        <div className="wrap flex flex-col gap-5 justify-center">
          <h5 className="text-grey-2 text-sm  text-center ">
            what my clients say?
          </h5>
          <p className="text-lg md:text-2xl  text-center mb-10">Testimonial</p>
          <div className="mb-20">
            <Testimonials />
          </div>
          <CtaSection />
        </div>
      </Section>

      <Footer />
    </>
  );
};

export default page;
