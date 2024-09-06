import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../Layouts/Title";
import carolynImg from "../../assets/alumni2.jpg"
import JohnImg from "../../assets/Johnndia.jpg"
import CaroImg from "../../assets/carolyn.jpg"
import RuthImg from "../../assets/ruth.jpg"
import quoteImg from "../../assets/quote.png"
import { RiStarFill } from "react-icons/ri";
import { useState } from "react";

const Testimonial = () => {
  const[dotActive,setDotActive]=useState(0);
  const settings = {
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ display:"flex",gap:"15px",justifyContent:"center",marginTop:"20px"}}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={ 
          i===dotActive? {
          width: "12px",
          height:"12px",
          borderRadius: "50%",
          backgroundColor:"#ff014f",
          color: "blue",

        }
        :{
          width: "12px",
          height:"12px",
          borderRadius: "50%",
          backgroundColor:"gray",
          color: "blue",
        }
      }
      >
      
      </div>
    ),
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange:(prev,next)=>{
      setDotActive(next);
    }
  };
  return (
    <section
      id="testimonials"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div>
        <div className="flex justify-center items-center text-center">
          <Title title="WHAT CLIENTS SAY" des="Testimonial" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center" >
                <img 
               className="h-72 rounded-lg object-cover" 
                src={carolynImg} alt="testimonialOne" />
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">Bound-Trolola</p>
              <h3 className="text-2xl font-bold">Patricia Kombo</h3>
              <p className="text-base tracking-wide text-gray-500" >Media personality</p>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quoteImg} alt="quotes" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 border-b-gray-600">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">Travel Website</h3>
                      <p className="text-base text-gray-300 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="text-yellow-500 flex gap-2">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-titleFont text-gray-300 font-medium tracking-wide leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Quia, animi? Repellendus officia rerum laudantium quis eos,
                        odit adipisci distinctio soluta explicabo, dolorum dignissimos.
                         Eaque error ullam, repellat dolore veniam distinctio atque quaerat eveniet. 
                         Cum quam mollitia, et harum voluptates quia?</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center" >
                <img 
               className="h-72 rounded-lg object-cover" 
                src={RuthImg} alt="testimonialOne" />
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">Bound-Trolola</p>
              <h3 className="text-2xl font-bold">Patricia Kombo</h3>
              <p className="text-base tracking-wide text-gray-500" >Media personality</p>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quoteImg} alt="quotes" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 border-b-gray-600">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">Travel Website</h3>
                      <p className="text-base text-gray-300 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="text-yellow-500 flex gap-2">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-titleFont text-gray-300 font-medium tracking-wide leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Quia, animi? Repellendus officia rerum laudantium quis eos,
                        odit adipisci distinctio soluta explicabo, dolorum dignissimos.
                         Eaque error ullam, repellat dolore veniam distinctio atque quaerat eveniet. 
                         Cum quam mollitia, et harum voluptates quia?</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center" >
                <img 
               className="h-72 rounded-lg object-cover" 
                src={CaroImg} alt="testimonialOne" />
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">Bound-Trolola</p>
              <h3 className="text-2xl font-bold">Patricia Kombo</h3>
              <p className="text-base tracking-wide text-gray-500" >Media personality</p>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quoteImg} alt="quotes" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 border-b-gray-600">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">Travel Website</h3>
                      <p className="text-base text-gray-300 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="text-yellow-500 flex gap-2">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-titleFont text-gray-300 font-medium tracking-wide leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Quia, animi? Repellendus officia rerum laudantium quis eos,
                        odit adipisci distinctio soluta explicabo, dolorum dignissimos.
                         Eaque error ullam, repellat dolore veniam distinctio atque quaerat eveniet. 
                         Cum quam mollitia, et harum voluptates quia?</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-[500px] flex justify-between">
              <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center" >
                <img 
               className="h-72 rounded-lg object-cover" 
                src={JohnImg} alt="testimonialOne" />
                <p className="text-xs uppercase text-designColor tracking-wide mb-2">Bound-Trolola</p>
              <h3 className="text-2xl font-bold">Wilfred Komu</h3>
              <p className="text-base tracking-wide text-gray-500" >Media personality</p>
              </div>
              <div className="w-[60%] h-full flex flex-col justify-between">
                <img className="w-[20%]" src={quoteImg} alt="quotes" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 border-b-gray-600">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">Travel Website</h3>
                      <p className="text-base text-gray-300 mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="text-yellow-500 flex gap-2">
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    <RiStarFill />
                    </div>
                  </div>
                  <div>
                    <p className="text-base font-titleFont text-gray-300 font-medium tracking-wide leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                       Quia, animi? Repellendus officia rerum laudantium quis eos,
                        odit adipisci distinctio soluta explicabo, dolorum dignissimos.
                         Eaque error ullam, repellat dolore veniam distinctio atque quaerat eveniet. 
                         Cum quam mollitia, et harum voluptates quia?</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
