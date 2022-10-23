import React from "react";
import CallToActionCard from "../components/CallToActionCard";
import EllipseCard from "../components/EllipseCard";
import NavBar from "../components/NavBar";
import RiderImageCard from "../components/RiderImageCard";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className="flex items-center bg-primary text-black-400 px-16 min-h-screen">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7 text-white">
            <h1 className="max-w-2xl mb-4 text-xxl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              The quick, inexpensive platform to travel your goods
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-md">
              DSptach is a platform to transport goods and services from
              anywhere in Nigeria. With our quality drivers registered to the
              platform, your goods are in safe hands.
            </p>
            <div className="flex justify-between w-3/4">
              <button
                type="button"
                className="flex mt-3 w-48 h-14 bg-black text-white border border-white rounded-xl items-center justify-center"
              >
                <div className="mr-3">
                  <svg viewBox="0 0 384 512" width="30">
                    <path
                      fill="currentColor"
                      d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-2xl font-semibold font-sans -mt-1">
                    App Store
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="flex mt-3 w-48 h-14 bg-black text-white rounded-lg border border-white items-center justify-center"
              >
                <div className="mr-3">
                  <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path
                      fill="#FFD400"
                      d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                    ></path>
                    <path
                      fill="#FF3333"
                      d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#48FF48"
                      d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                    ></path>
                    <path
                      fill="#3BCCFF"
                      d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-md font-semibold font-sans -mt-1">
                    Google Play
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>
      {/* End of Hero Section */}

      {/* Sub Hero Section */}
      <section className="flex bg-[url(/src/assets/roman-logov-f5QWC1a3tOA-unsplash.png)] h-60 w-full bg-cover bg-center text-white px-16 py-8  ">
        <div className="w-1/2 px-14 flex flex-col justify-center">
          <h1 className="text-lg py-2 text-left w-fit font-bold">
            Become a DSpatcher and get paid
          </h1>
          <p className="text-sm text-left w-fit">
            Drive on the platform with the most active rider network. <br />
            Be your own boss and choose your own schedule.
          </p>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-primary bg-white focus:outline-none bg-black-400 rounded-full focus:z-10 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Sign Up to DSpatch
          </button>
        </div>
      </section>
      {/* End of Sub Hero Section */}

      {/* Action Section */}
      <section className="my-20 px-36">
        <div className="flex">
          <CallToActionCard
            header="The greatest delivery personnel you've ever encountered"
            paragraph="Meet with great delivery DSpatchers and get the perfect service you want for your customers"
            action={null}
          />
          <RiderImageCard image={`/src/assets/rider-removebg.png`} />
        </div>
        <div className="flex">
          <RiderImageCard image={`/src/assets/rider-removebg.png`} />
          <CallToActionCard
            header="Excellent riders and partners ready to deliver"
            paragraph="There will always be a DSpatcher nearby to pick up your packages and more because they are spread around over every city."
            action="Sign Up to get started"
          />
        </div>
        <div className="flex">
          <CallToActionCard
            header="Got a Bike?"
            paragraph="We want you on the DSpatch Team if you own a bike and want to increase your income. Join the DSpatch team to boost your income. Be your own boss and choose your own schedule."
            action="Partner with Us!"
          />
          <RiderImageCard image={`/src/assets/rider-removebg.png`} />
        </div>
      </section>
      {/* End of Action Section */}

      {/* Ellipse Card */}
      <section className="flex items-center justify-center w-full h-64 px-16 mb-24">
        <EllipseCard
          header="Find a Ride"
          paragraph="DSpatch offers you ride for your packages in few minutes."
        />
        <EllipseCard
          header="Great Prices"
          paragraph="The finest ride rates in every city are what we strive to provide. Come and have a look!"
        />
        <EllipseCard
          header="Easy to Use"
          paragraph="Deliver your packages as soon as you can to the desired location."
        />
      </section>
      {/*End Ellipse Card */}

      {/* Testimonials Section */}
      <section className="flex flex-col items-center justify-center mt-24 w-1/2 mx-auto text-center mb-10">
        <span className="bg-gray-100 text-sm rounded-2xl px-3 text-state-error font-bold">
          TESTIMONIALS
        </span>
        <h1 className="text-mdlg font-bold mb-2">
          Every user has a story to tell.
        </h1>
        <p>
          See how Dspatch changed people's perspectives about their businesses,
          finances and themselves.
        </p>
      </section>

      <section className="flex justify-around px-16 my-20">
        <TestimonialCard 
        customerName="Adeniyi John"
        CustomerDesignation="Founder of E-Genta"
        testimonal="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam non aliquet eget massa aliquam at sed. Dui, ut rhoncus sit viverra. Nibh ultricies ullamcorper in commodo convallis sed dui adipiscing. "
        customerImage={`/src/assets/jonas-kakaroto-KIPqvvTOC1s-unsplash.png`}
        />
        <TestimonialCard 
        customerName="Yemi Skujyl"
        CustomerDesignation="Deputy Director at CBC"
        testimonal="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam non aliquet eget massa aliquam at sed. Dui, ut rhoncus sit viverra. Nibh ultricies ullamcorper in commodo convallis sed dui adipiscing."
        customerImage={`/src/assets/julian-wan-WNoLnJo7tS8-unsplash.png`}
        
        />
        <TestimonialCard
        customerName="Naijablog"
        CustomerDesignation="@naijablog9ja"
        testimonal="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam non aliquet eget massa aliquam at sed. Dui, ut rhoncus sit viverra. Nibh ultricies ullamcorper in commodo convallis sed dui adipiscing."
        customerImage={`/src/assets/matheus-ferrero-W7b3eDUb_2I-unsplash.png`}
        />
      </section>
      {/*End of Testimonials Section */}

      {/* Mobile call to Section */}
      <div className="bg-primary text-white text-sm w-full h-80 my-20">
        <div className="flex flex-col justify-between text-center items-center m-auto w-1/3 h-80 pt-8 pb-6">
        <h1 className="text-white text-lg font-bold ">
          Ready to send goods to your customers?
        </h1>

        <div className="flex justify-between">
          <button
            type="button"
            className="flex mt-3 w-48 h-14 bg-black border border-white rounded-xl items-center justify-center"
          >
            <div className="mr-3">
              <svg viewBox="0 0 384 512" width="30">
                <path
                  fill="currentColor"
                  d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                ></path>
              </svg>
            </div>
            <div>
              <div className="text-xs">Download on the</div>
              <div className="text-md font-semibold font-sans -mt-1">
                App Store
              </div>
            </div>
          </button>
          <button
            type="button"
            className="flex mt-3 w-48 h-14 bg-black rounded-lg border border-white items-center justify-center"
          >
            <div className="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width="30">
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                ></path>
                <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                ></path>
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                ></path>
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                ></path>
              </svg>
            </div>
            <div>
              <div className="text-xs">GET IT ON</div>
              <div className="text-md font-semibold font-sans -mt-1">
                Google Play
              </div>
            </div>
          </button>
        </div>
        <div>
          <p>
            or{" "}
            <span className="font-bold underline underline-offset-4">
              <a href="#">Sign up</a>
            </span>{" "}
            to start DSpatching
          </p>
        </div>
        </div>
      </div>
      {/* End of Mobile call to Section */}

      {/* Footer Section */}
        <Footer />
      {/*End of Footer Section */}
    </>
  );
};

export default Home;
