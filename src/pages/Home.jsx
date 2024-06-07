import React, { useEffect, useRef, useState } from "react";
import gauri from "../assets/images/gauri.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { artData } from "../utils/ArtData";
import { Link } from "react-router-dom";
import { FaInstagram, FaRegEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { AnimatePresence } from "framer-motion";
import cx from "classnames";
import plane from "../assets/images/2.gif"

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();
  const [artId, setArtId] = useState(0);
  // console.log(process.env.REACT_APP_SERVICE_ID);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_84fe2m9", "template_cuubh1g", form.current, {
        publicKey: "OC5nEKRqhPGS5-2Vm",
      })
      // .sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, form.current, {
      //   publicKey: process.env.PUBLIC_KEY,
      // })
      .then(
        () => {
          alert("Your message has been delived successfully!");
        },
        (error) => {
          alert("Error in sending message.");
        }
      );
  };

  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <div className="bg-hero bg-cover h-[90vh] relative">
        <div
          className="text-white-main lg:text-black-main text-5xl font-fancy font-extrabold p-4 absolute bottom-44 italic lg:text-9xl lg:top-28  w-[100vw] text-center select-none"
          data-aos="zoom-in-right"
        >
          <div className="opacity-85">Gauri Gupta's</div>
          <div className="pl-8 opacity-85 pb-4"></div>
          <div className="text-lg font-extrabold font-primary text-wrap opacity-90">
            Art Portfolio. Making an impact through art.
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="bg-brown-main p-8 lg:flex justify-between select-none">
        {/* Left section */}
        <div className="lg:border-r-[1px] lg:border-white-main  lg:w-[60%] lg:mr-16 lg:pr-16 flex opacity-80">
          <div
            className="text-justify text-xl font-primary text-white-main  self-center italic pb-8"
            data-aos="fade-up"
          >
            I'm Gauri Gupta, and I'll be 16 years old this year. Ever since I
            picked up a pencil, I've been captiated by the world of art.
            Currently in 11th grade in Indore, Madhya Pradesh. I've explored
            various mediums including color pencil, graphite, charcoal, acrylic
            painting, oil painting, pen cross-hatching, and stippling. My dream
            is to create an impact through my artwork, drawing inspiration from
            plethora of sources such as my favourite musicians, the scenery
            around me, diverse art in my city, and the people who influence me,
            including my parents and teachers who continuously inspire me to
            reach my potential.
          </div>
        </div>
        {/* Right section */}
        <div className="lg:w-[40%]">
          {/* top */}
          <div data-aos="fade-up">
            <img
              src={gauri}
              alt="Profile"
              className="pointer-events-none"
              data-aos="fade-up"
            />
          </div>
          {/* bottom */}
          <div
            className="lg:text-right font-primary py-8 text-white-main opacity-80"
            data-aos="fade-up"
          >
            My artistic journey has been vivid, marked by participation in
            several exhibitions hosted by my school and external sources, I've
            also had the opportunity to create and sell some of my artwork. As I
            continue on this journey, I'm excited to see where my passion takes
            me and how I can continue to grow and make an impact through my art.
          </div>
        </div>
      </div>

      {/* IMAGE CARDS */}
      <div className="bg-white-main">
        {/* Section 1 */}
        <div>
          <div
            className="font-fancy text-black-main text-5xl text-center font-bold pt-12 pb-4"
            data-aos="zoom-in"
          >
            Art that inspires you
          </div>
          <div className="flex flex-wrap justify-evenly p-8">
            {artData?.slice(0, 8)?.map((item) => (
              <div
                key={item.id}
                className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <Link to={item.to} className="">
                  <img
                    src={item.img}
                    alt=""
                    data-aos="zoom-in"
                    className="w-[300px] h-[300px] min-h-[300px] lg:w-[250px] lg:h-[250px] lg:min-h-[250px] mb-8"
                    onMouseOver={() => setArtId(item.id)}
                  />
                  {/* After Hover Part */}
                  <AnimatePresence initial={false}>
                    <div
                      className={cx(
                        "hidden absolute top-0 bg-brown-main bg-opacity-50 text-center w-[300px] h-[300px] min-h-[300px] lg:w-[250px] lg:h-[250px] lg:min-h-[250px]",
                        { "!flex !justify-center": artId === item.id }
                      )}
                    >
                      <div className="text-white-main border-2 border-white-main rounded-3xl px-3 py-1 self-center font-primary">
                        Find out more
                      </div>
                    </div>
                  </AnimatePresence>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Section 1 end */}

        {/* Section 2 */}
        <div className="flex flex-col-reverse lg:flex-row mx-8 lg:mx-16 lg:justify-evenly">
          <div>
            {artData?.slice(8, 9)?.map((item) => (
              <div
                key={item.id}
                className="relative transition-all duration-500 ease-in-out transform hover:scale-110 flex justify-center"
              >
                <Link to={item.to} className="">
                  <img
                    src={item.img}
                    alt=""
                    data-aos="fade-up"
                    className="w-[300px] h-[300px] lg:mb-8 lg:w-[500px] lg:h-[500px]"
                    onMouseOver={() => setArtId(item.id)}
                  />
                  {/* After Hover Part */}
                  <AnimatePresence initial={false}>
                    <div
                      className={cx(
                        "hidden absolute top-0 bg-brown-main bg-opacity-50 text-center w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]",
                        { "!flex !justify-center": artId === item.id }
                      )}
                    >
                      <div className="text-white-main border-2 border-white-main rounded-3xl px-3 py-1 self-center font-primary">
                        Find out more
                      </div>
                    </div>
                  </AnimatePresence>
                </Link>
              </div>
            ))}
          </div>
          <div
            className="font-fancy text-black-main text-5xl text-center font-bold pt-4 pb-12 self-center"
            data-aos="fade-up"
          >
            Beyond The Imagination
          </div>
        </div>
        {/* Section 2 end */}

        {/* Section 3 */}
        <div>
          <div className="flex flex-wrap justify-evenly px-8 pt-8">
            {artData?.slice(9, 21)?.map((item) => (
              <div
                key={item.id}
                className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <Link to={item.to} className="">
                  <img
                    src={item.img}
                    alt=""
                    data-aos="zoom-in"
                    className="w-[300px] h-[300px] min-h-[300px] lg:w-[250px] lg:h-[250px] lg:min-h-[250px] mb-8"
                    onMouseOver={() => setArtId(item.id)}
                  />
                  {/* After Hover Part */}
                  <AnimatePresence initial={false}>
                    <div
                      className={cx(
                        "hidden absolute top-0 bg-brown-main bg-opacity-50 text-center w-[300px] h-[300px] min-h-[300px] lg:w-[250px] lg:h-[250px] lg:min-h-[250px]",
                        { "!flex !justify-center": artId === item.id }
                      )}
                    >
                      <div className="text-white-main border-2 border-white-main rounded-3xl px-3 py-1 self-center font-primary">
                        Find out more
                      </div>
                    </div>
                  </AnimatePresence>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3 end */}

        {/* Section 4 */}
        <div className="mx-8 sm:flex sm:justify-evenly lg:gap-0 lg:mx-16">
          {/* Sub Section 4.1 */}

          <div className="flex justify-center sm:block">
            {artData?.slice(21, 22)?.map((item) => (
              <div
                key={item.id}
                className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
              >
                <Link to={item.to} className="">
                  <img
                    src={item.img}
                    alt=""
                    data-aos="zoom-in"
                    className="w-[300px] h-[300px] min-h-[300px] lg:w-[500px] lg:h-[500px] mb-8 lg:my-8"
                    onMouseOver={() => setArtId(item.id)}
                  />
                  {/* After Hover Part */}
                  <AnimatePresence initial={false}>
                    <div
                      className={cx(
                        "hidden absolute top-0 bg-brown-main bg-opacity-50 text-center w-[300px] h-[300px] min-h-[300px] lg:w-[500px] lg:h-[500px]",
                        { "!flex !justify-center": artId === item.id }
                      )}
                    >
                      <div className="text-white-main border-2 border-white-main rounded-3xl px-3 py-1 self-center font-primary">
                        Find out more
                      </div>
                    </div>
                  </AnimatePresence>
                </Link>
              </div>
            ))}
          </div>

          {/* 4.1 end */}
          <div>
            <div
              className="font-fancy text-brown-main text-5xl text-center font-bold pt-8 pb-4 lg:pt-12 hidden lg:block"
              data-aos="zoom-in"
            >
              <div className="text-beige-main">Capturing Moments on Canvas</div>
              <div className="lg:ml-52">
                Realising Imagination with Brush Strokes
              </div>
            </div>

            <div className="flex justify-center sm:block">
              {artData?.slice(22, 23)?.map((item) => (
                <div
                  key={item.id}
                  className="relative transition-all duration-500 ease-in-out transform hover:scale-110"
                >
                  <Link to={item.to} className="">
                    <img
                      src={item.img}
                      alt=""
                      data-aos="zoom-in"
                      className="w-[300px] h-[300px] min-h-[300px] lg:w-[500px] lg:h-[500px] mb-8 lg:my-12"
                      onMouseOver={() => setArtId(item.id)}
                    />
                    {/* After Hover Part */}
                    <AnimatePresence initial={false}>
                      <div
                        className={cx(
                          "hidden absolute top-0 bg-brown-main bg-opacity-50 text-center w-[300px] h-[300px] min-h-[300px] lg:w-[500px] lg:h-[500px]",
                          { "!flex !justify-center": artId === item.id }
                        )}
                      >
                        <div className="text-white-main border-2 border-white-main rounded-3xl px-3 py-1 self-center font-primary">
                          Find out more
                        </div>
                      </div>
                    </AnimatePresence>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Section 4 end */}
      </div>

      {/* CONTACT FORM */}
      <div className="bg-brown-main lg:flex justify-between py-8 text-center lg:px-24 lg:text-left">
        <div className="font-primary text-white-main relative mx-8">
          <div className="text-xl font-bold opacity-70">Let's Chat</div>
          <div className="mt-4 font-primary italic lg:tracking-wider">For inquiries and collaborations, drop me a message.</div>
           <div className="font-primary italic lg:tracking-wider mt-2">Feel free to reach out and get in touch.</div>
          <div className="hidden lg:block absolute -bottom-28"><img src={plane} alt="plane" className="rotate-90"/></div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="bg-brown-main border-white-main border-[1px] outline-none w-[300px] lg:w-[450px] h-[40px] p-2 text-white-main my-4"
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="bg-brown-main  border-white-main border-[1px] outline-none w-[300px] lg:w-[450px] h-[40px] p-2 text-white-main my-4"
          />
          <br />
          <textarea
            name="message"
            placeholder="Message"
            className="bg-brown-main  border-white-main border-[1px] outline-none w-[300px] lg:w-[450px] p-2 text-white-main my-4"
            rows={3}
          ></textarea>
          <br />
          <button className="bg-brown-main text-white-main px-4 py-2 border-white-main border-[1px] hover:bg-beige-main">
            Send Message
          </button>
        </form>
      </div>
      {/* FOOTER */}
      <div className="bg-brown-main border-white-main border-t-[1px] text-white-main px-8 py-4 font-primary text-center">
        <div className="pb-2 text-sm">&#169;Gauri Gupta</div>
        <div className="">
          <div className="flex gap-4 justify-center pb-2 text-sm">
            <FaRegEnvelope className="text-xl self-center" />
            gauri.gupta20008@gmail.com
          </div>
          <div>
            <a
              href="https://www.instagram.com/imgaurigupta/"
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 justify-center"
            >
              <FaInstagram className="text-xl self-center" />
              @GauriGupta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
