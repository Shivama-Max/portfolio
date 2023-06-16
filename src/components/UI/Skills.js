import React from "react";
import fimg from "../../assets/images/front-end.png";
import bimg from "../../assets/images/backend.png";
import uimg from "../../assets/images/design.png"
import nlpimg from "../../assets/images/nlpimg.png"
const Skills = () => {
  return (
    <section id="skills">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
            Key Takeaways
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
            Throughout my academic years, I have acquired a diverse set of
            skills that have equipped me to excel in the field of computer
            science. From programming languages like Python and Java to web
            development frameworks such as ReactJS and Express, I have honed my
            abilities to develop robust and innovative solutions.I am ready to
            take on new challenges and contribute effectively to the world of
            technology.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-grey-700 antialiased text-sm font-semibold">
              <div className="hidden absolute w-1 sm:block bg-red-200 h-full left-1/2 transform -translate-x-1/2"></div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-red-400 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-red-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Frontend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] leading-5">
                          I specialize in creating engaging and user-friendly
                          interfaces. With expertise in HTML, CSS, and
                          JavaScript, I craft visually appealing web
                          experiences. I also leverage frameworks like React to
                          build dynamic and interactive applications. My
                          attention to detail and understanding of UX/UI
                          principles allow me to deliver seamless and responsive
                          designs.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-red-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                    <figure>
                      <img src={fimg} alt="img" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-red-400 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-red-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Backend Development
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] leading-5">
                          Skilled in Node.js, Express, and MongoDB, I excel in
                          backend development. Leveraging JavaScript on the
                          server-side, I create efficient web applications. With
                          Express, I build robust APIs, while MongoDB ensures
                          scalable data storage. My expertise in these
                          technologies enables me to deliver seamless backend
                          solutions for web development.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-red-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                    <figure>
                      <img src={bimg} alt="img" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-start w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pr-8">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-red-400 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-red-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          AI/ML
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] leading-5">
                          Experienced in AI/ML, with a strong focus on
                          algorithms, regression, classification, and neural
                          networks. Proficient in Python libraries like
                          TensorFlow, scikit-learn. Additionally, I have gained
                          knowledge in Natural Language Processing (NLP)
                          techniques, expanding my capabilities in the field.
                          Passionate about staying updated with the latest
                          advancements in AI/ML.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-red-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center ">
                    <figure>
                    <img src={uimg} alt="img" />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="mt-6 sm:mt-0 sm:mb-12">
                <div className="flex items-center flex-col sm:flex-row">
                  <div className="flex justify-end w-full mx-auto items-center">
                    <div className="w-full sm:w-1/2 sm:pl-8">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1200"
                        className="bg-white p-4 rounded shadow group hover:bg-red-400 cursor-pointer ease-in duration-150"
                      >
                        <h3 className="text-red-400 font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                          Natural Language Processing
                        </h3>
                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[600] leading-5">
                        I have developed a decent foundation in Natural Language Processing (NLP), gaining hands-on experience in text analysis, sentiment analysis, and language modeling. I enjoy exploring NLP techniques and have worked with popular libraries like NLTK and SpaCy to extract insights from textual data.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-full bg-red-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={nlpimg} alt="img" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
