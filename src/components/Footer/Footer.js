import React from "react";

function Footer() {
  return (
    <footer className="bg-[#12141e] pt-12 pb-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]">
              Always available to collaborate for projects
            </h2>
            <a href="mailto:shivamasthakur.02@gmail.com">
              <button
                className="bg-red-400 text-white font-[500] flex items-center gap-2
                hover:bg-red-700 ease-in duration-300 py-2 px-4 rounded-[8px]"
              >
                <i class="ri-chat-smile-2-line"></i>Reach Out
              </button>
            </a>
          </div>

          <div className="w-full sm:w-1/2">
            <p className="text-gray-300 leading-7 mt-4 sm:mt-0 ">
              "Your work is going to fill a large part of your life, and the
              only way to be truly satisfied is to do what you believe is great
              work."
              <p className="font-bold">-Steve Jobs</p>
            </p>

            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300 font-[600] text-[15px]">
                Follow Me
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://github.com/Shivama-Max" className="text-gray-300 font-[500] text-[18px]">
                  <i class="ri-github-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.instagram.com/_shivama_/" className="text-gray-300 font-[500] text-[18px]">
                  <i class="ri-instagram-line"></i>
                </a>
              </span>
              <span className="w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center">
                <a href="https://www.linkedin.com/in/shivam-a-4938b7238" className="text-gray-300 font-[500] text-[18px]">
                  <i class="ri-linkedin-line"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="menu">
            <ul className="flex items-center justify-center gap-10 mt-10">
              <li>
                <a className="text-gray-400 font-[600]" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600]" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600]" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="text-gray-400 font-[600]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
      </div>
      
    </footer>
  );
}

export default Footer;
