import React from "react";
import img_6a from "../asets/img_6a.jpg";
import img_6b from "../asets/img_6b.jpg";
import img_6c from "../asets/img_6c.jpg";
import img_6d from "../asets/img_6d.jpg";
import img_6e from "../asets/img_6e.jpg";

const Testimonials = () => {
  return (
    <div
      //   style={{ backgroundImage: `url(${gg1})` }}
      className="max-w-full bg-black sm:mt-32  flex  flex-col justify-center items-center "
    >
      <div className=" text-center border mx-4  p-4  border-gray-700/50">
        <h2 className="uppercase text-xl sm:mb-20font-light  text-gray-800">
          Testimonials{" "}
        </h2>
        <h1 className="font-semibold text-3xl mb-5">
          What Our Customers Say About Us?
        </h1>
        <p className="text-gray-500 mb-5">
          Here are the testimonials from some of our customers. This is what
          they are saying about us.
        </p>
      </div>

      {/* Testimonial */}
      <div>
        <div className="grid gap-8 bg-gradient-to-t from-blue-800/30 to-blue-800/10 duration-200 ease-in-out hover:bg-gradient-to-tl hover:to-blue-800/30 hover:via-blue-800/50  hover:from-blue-800/10 backdrop-blur-2xl p-10  sm:grid-cols-2 md:grid-cols-3 sm:gap-20 mt-5">
          {/* Testimonial_1 */}
          <div className="text-center border-8  p-4  border-gray-700/10 ">
            <div className="bg-gradient-to-b shadow-md shadow-blue-600 from-[#C87553] to-[#171315]   w-10 h-10 mx-auto rounded-xl flex items-center justify-center">
              <img src={img_6a} alt="abel" className=" w-8 h-8 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">Steel Corp</h1>
            <h2 className="text-md uppercase font-bold">Lindsay M</h2>
            <p className="text-start text-2xl sm:text-sm overflow-auto  text-gray-400 ">
              I have been a customer of these guys since 2008,I have never had
              to find anyone else to do my steel works. AC Metal Fabricators is
              the best, I just love these guys. Keep on the goo works Abe!~
            </p>
          </div>

          {/* Testimonial_2 */}
          <div className="text-center border-8  p-4  border-gray-700/10">
            <div className="bg-gradient-to-b shadow-md shadow-blue-600 from-[#C87553] to-[#171315]   w-10 h-10 mx-auto rounded-xl flex items-center justify-center">
              <img src={img_6b} alt="abel" className=" w-8 h-8 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">VarnGaurd</h1>
            <h2 className="text-md ">Timothy C</h2>
            <p className="text-end text-2xl sm:text-sm overflow-auto  text-gray-400 ">
              They trully know what they are doing these guys. I cant wait to
              give them my next project l'm working on.I just can't wait! The
              way they finish tasks is incredibly fast~
            </p>
          </div>

          {/* Testimonial_2 */}
          <div className="text-center border-8 p-4  border-gray-700/10">
            <div className="bg-gradient-to-b shadow-md shadow-blue-600 from-[#C87553] to-[#171315]   w-10 h-10 mx-auto rounded-xl flex items-center justify-center">
              <img src={img_6c} alt="abel" className=" w-8 h-8 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              Feneral Inc
            </h1>
            <h2 className="text-md ">Dumisani Dlamini</h2>
            <p className="text-start text-2xl sm:text-sm overflow-auto  text-gray-400 ">
              I love the way they handle customers.You are safe in their hands.I
              am incredibly fascinated by this cumpany's way of handling things~
            </p>
          </div>

          {/* Testimonial_2 */}
          <div className="text-center border-8 p-4  border-gray-700/10">
            <div className="bg-gradient-to-b shadow-md shadow-blue-600 from-[#C87553] to-[#171315]   w-10 h-10 mx-auto rounded-xl flex items-center justify-center">
              <img src={img_6d} alt="abel" className=" w-8 h-8 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              Timber Valley
            </h1>
            <h2 className="text-md  d">Ferdnand T</h2>
            <p className="text-end text-2xl sm:text-sm overflow-auto  text-gray-400 ">
              They have a gift of caring for customers. I have been with these
              guys for a long time.We get along really well ~
            </p>
          </div>

          {/* Testimonial_2 */}
          <div className="text-center border-8 p-4  border-gray-700/10 ">
            <div className="bg-gradient-to-b shadow-md shadow-blue-600 from-[#C87553] to-[#171315]   w-10 h-10 mx-auto rounded-xl flex items-center justify-center">
              <img src={img_6e} alt="abel" className=" w-8 h-8 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">Steel Corp</h1>
            <h2 className="text-md  ">B . M . Phillips</h2>
            <p className="text-start text-2xl sm:text-sm overflow-auto  text-gray-400 ">
              AC Metal Fabricator is my go-to whenever i need something done
              proper, fast and affodable!~
            </p>
          </div>
          {/* Testimonial_2 */}
          <div className="text-center border-8 p-4  border-gray-700/10 ">
            <div className="bg-gradient-to-b shadow-md shadow-blue-600 from-[#C87553] to-[#171315]   w-10 h-10 mx-auto rounded-xl flex items-center justify-center">
              {/* <img src={} alt="abel" className=" w-8 h-8 rounded-full" /> */}
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              Machine Vien
            </h1>
            <h2 className="text-md  "> M . Vonbern</h2>
            <p className="text-start text-2xl sm:text-sm overflow-auto  text-gray-400 ">
              They helped me in a lot of ways. I believe in these guys .May
              their works live forever .They are the best we have so far .Keep
              on with the good work guys.~
            </p>
          </div>

          {/* Sixth
          <div className="text-center">
            <div className="  w-72 h-72 rounded-full flex items-center justify-center">
              <img src={disk} alt="abel" className=" w-64 h-64 rounded-full" />
            </div>
            <h1 className="mt-4 uppercase text-sm text-gray-400">
              AC Metal Fabricator
            </h1>
            <h2 className="text-md uppercase font-bold">AC Metal Fabricator</h2>
            <p className="text-center text-xs  text-gray-400">
              We ARE AC Metal Fabricators
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
