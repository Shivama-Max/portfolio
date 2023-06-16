import React from 'react'
import CountUp from "react-countup"

const Hero = () => {
  return (
    <section className='pt-8' id='about'>
        <div className="container pt-14">
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                <div className="w-full md:basis-1/2">
                    <h5 
                    data-aos="fade-right" 
                    data-aos-duration = "1500"
                    className='text-headingColor font-[600] text-[16px]'>
                        Hello, welcome
                    </h5>
                    <h1
                     data-aos = "fade-up"
                     data-aos-duration = "1500"
                     className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[45px] mt-5'
                    >
                        I am Shivama,<br/>A Frontend Developer
                    </h1>
                    <div data-aos="fade-up" 
                    data-aos-duration = "1800" data-aos-delay = "200"
                    className="flex items-center gap-6 mt-7">
                        <a href="mailto:shivamasthakur.02@gmail.com">
                            <button className='bg-red-400 text-white font-[500] flex items-center gap-2
                            hover:bg-red-700 ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i className="ri-mail-fill"></i>Bring Me On Board
                            </button>
                        </a>
                        <a href="#portfolio" className='text-smallTextColor font-[600] text-[16px] border-b border-solid
                        border-smallTextColor'>
                            Portfolio
                        </a>
                    </div>
                    <p 
                        id="p"
                        data-aos="fade-left" 
                        data-aos-duration = "1800"
                        className='flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10'>
                            <span><i class="ri-apps-fill"></i></span>
                            As a computer science student, I possess proficiency in programming languages like Python and Java. Additionally, I have a keen interest in web development and am well-versed in HTML, CSS, JavaScript, and frameworks like ReactJS. My enthusiasm for web development motivates me to continuously enhance my skills in this ever-evolving domain.                    </p>
                    <div className="flex items-center gap-9 mt-14">
                        <span className='text-smallTextColor text-[15px] font-[600]'>
                            Follow me:
                        </span>
                        <span>
                            <a href="https://instagram.com/_shivama_" className = "text-smallTextColor text-[25px] font-[600]"><i class="ri-instagram-line"></i></a>
                        </span>
                        <span>
                            <a href="https://www.linkedin.com/in/shivam-a-4938b7238" className = "text-smallTextColor text-[25px] font-[600]"><i class="ri-linkedin-fill"></i></a>
                        </span>
                        <span>
                            <a href="https://github.com/Shivama-Max" className = "text-smallTextColor text-[25px] font-[600]"><i class="ri-github-fill"></i></a>
                        </span>
                    </div>
                </div>

                <div className="basis-1/3 mt-10 sm:mt-0">
                    <figure className='flex items-center justify-center'>
                        <img 
                        data-aos="zoom-in" 
                        data-aos-duration = "1800"
                        src="https://user-images.githubusercontent.com/74038190/241764371-9d0fd0c4-5c7f-4122-b884-64a1e1685d2d.gif" alt="img" />
                    </figure>
                </div>

                <div className='ms:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={10} duration={2} suffix='+'/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">Repositories</h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={7} duration={2} suffix='+'/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">Projects</h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={15} duration={2} suffix='+'/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">Tools and<br/>Programming<br/>Languages</h4>
                    </div>
                    <div className="mb-10">
                        <h2 className="text-headingColor font-[700] text-[32px]">
                            <CountUp start={0} end={30} duration={2} suffix='+'/>
                        </h2>
                        <h4 className="text-headingColor font-[600] text-[18px]">Technical Courses<br/>Completed</h4>
                    </div>
                </div>


            </div>
        </div>

    </section>
  )
}

export default Hero