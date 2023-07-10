import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import svg from "../Assets/svg.png";
import Frame from "../Assets/Frame.png";
import tree from "../Assets/tree.png";
import three from "../Assets/three.png"
import partner from "../Assets/partner.png";
import Rectangle from "../Assets/Rectangle.png";
import Rectangle1 from "../Assets/Rectangle1.png";
import Rectangle2 from "../Assets/Rectangle2.png";
import Rectangle3 from "../Assets/Rectangle3.png";
import Rectangle4 from "../Assets/Rectangle4.png";
import Rectangle5 from "../Assets/Rectangle5.png"


const Partnership = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5  items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
             src={partner} ></img>
          
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              It's called the magic of trees!
            </h1>
            <p className="mb-8 leading-relaxed">
              Empower your business by committing to make the Earth a better
              place for all!
            </p>
            <h1 className="title-font sm:text-4xl text-3xl font-medium text-white">
              Our Partners
            </h1>
          </div>
        </div>
      </section>

      <section class="flex-row text-gray-600 body-font">
  <div class="container px-20 py-30 mx-auto">
    <div class="flex flex-wrap m-20 text-center">

      <div class="p-4 md:w-1/4 w-full">
        <div class="p-4 md:flex text-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
            <img src={Rectangle} alt="kjdkh"></img>
          </div>
          <div class="flex-grow"></div>
        </div>
      </div>

      <div class="p-4 md:w-1/4 w-full">
        <div class="p-4 md:flex text-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
            <img src={Rectangle1} alt="kjdkh"></img>
          </div>
          <div class="flex-grow"></div>
        </div>
      </div>

      <div class="p-4 md:w-1/4 w-full">
        <div class="p-4 md:flex text-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
            <img src={Rectangle2} alt="kjdkh"></img>
          </div>
          <div class="flex-grow"></div>
        </div>
      </div>

      <div class="p-4 md:w-1/4 w-full">
        <div class="p-4 md:flex text-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
            <img src={Rectangle3} alt="kjdkh"></img>
          </div>
          <div class="flex-grow"></div>
        </div>
      </div>

      <div class="p-4 md:w-1/4 w-full">
        <div class="p-4 md:flex text-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
            <img src={Rectangle4} alt="kjdkh"></img>
          </div>
          <div class="flex-grow"></div>
        </div>
      </div>

      <div class="p-4 md:w-1/4 w-full">
        <div class="p-4 md:flex text-center">
          <div class="w-20 h-20 inline-flex items-center justify-center rounded-full text-indigo-500 mb-5 flex-shrink-0">
            <img src={Rectangle5} alt="kjdkh"></img>
          </div>
          <div class="flex-grow"></div>
        </div>
      </div>

    </div>
  </div>
</section>




      <section class="text-gray-600 body-font">
        <div class="container px-5 py-15 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
              How Growth and Girders can Help You
            </h1>
            {/* <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p> */}
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-green-500 inline-flex"></div>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={svg} alt="sdfer"></img>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Plant trees to engage customers
                </h2>
                <p class="leading-relaxed text-base">
                  Impact marketing with trees increases brand affinity with the
                  growing number of consumers who prefer brands that contribute
                  to the well-being of the planet, to brands that do not.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={Frame} alt="narsdjh"></img>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Adopt a forest for Corporate Social Responsiblity (CSR)
                </h2>
                <p class="leading-relaxed text-base">
                  Employee and customer engagement is possible when sponsoring
                  one of our projects : everyone loves trees. You will be able
                  to regularly share communication material about your project.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={tree} alt="najgjh"></img>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  Offset your carbon footprint
                </h2>
                <p class="leading-relaxed text-base">
                  When carbon sequestration is needed, the best technology is a
                  tree. They are an amazing carbon sink.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="p-4 md:w-1/4 flex flex-col text-center items-center">
              <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <img src={three} alt="kjdkh"></img>
              </div>
              <div class="flex-grow">
                <h2 class="text-white text-lg title-font font-medium mb-3">
                  List your product coupon to engage our ecosystem
                </h2>
                <p class="leading-relaxed text-base">
                  Offer products and services to our growing community of
                  eco-conscious users worldwide. Listing vouchers and disount
                  coupons generates sales and stronger brand recognition for
                  your business at no cost.
                </p>
                <a class="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
};

export default Partnership;
