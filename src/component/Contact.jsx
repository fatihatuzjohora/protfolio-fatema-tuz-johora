import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section className="py-6 bg-zinc-900">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x justify-center items-center">
          <div className="py-6 md:py-0 md:px-6 text-white">
            <h1 className="text-4xl font-bold text-center">Find Me On</h1>
            <p className="pt-2 pb-4 text-center">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4 text-center">
              <p className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Satkhira, Khulna, Bangladesh</span>
              </p>
              <p className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+8801742764972</span>
              </p>
              <p className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>fatihatuzjohora143@gmail.com</span>
              </p>
            </div>
          </div>
          <form
            noValidate=""
            className="flex flex-col space-y-6 text-white bg-zinc-800 p-8"
          >
            <label className="block">
              <span className="mb-1 font-semibold">Your Name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm p-2 focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1 font-semibold">Your Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full p-2 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1 font-semibold">Your Message</span>
              <textarea
                rows="3"
                placeholder="Message"
                className="block w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:bg-gray-100"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring bg-blue-500 font-semibold block w-full"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <footer className="footer footer-center bg-gray-700 text-white p-4">
        <aside>
          <p>
            Copyright © ${new Date().getFullYear()} - All rights reserved by Fatema Tuz Johora
          </p>
        </aside>
      </footer>


    </div>
  );
};

export default Contact;
