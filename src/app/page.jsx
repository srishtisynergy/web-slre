import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Main from '@/components/Main'
import Storyteller from '@/components/Storyteller'
import Image from 'next/image';
import AboutImg from '/public/assets/images/home-banner/mobile-about-2.png';
import Testimonial from '@/components/Testimonial'
import Brandss from '@/components/Brandss'

export default async function Home() {
   let apiUrl = process.env.NEXT_PUBLIC_API_URL;

   const res = await fetch(`${apiUrl}/get/blogs`, { cache: 'no-store', method: 'GET' });
   if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
   }
   const blogsData = await res.json();

   return (

      <>
         <Main
            // bannerBg={"hero_bg_image"}
            bgTitle={"Development,"}
            bgTitle1={"Staffing"}
            bgTitle2={"and Marketing"}
            content={"Transform Your Vision into Reality with Our Expertise and Exceptional Services."}
            type={1}
            className={"md:h-screen md:bg-hero_bg_image md:w-full h-[250px] bg-cover bg-center bg-no-repeat bg-mobile_hero_bg_image"}
            buttonContent={"Schedule a Call Now"}
         />

         <section className="mb-2 my-20">
            <div className="container mx-auto">

                  <div className="flex flex-wrap">

                     <div className="mx-auto max-w-[100%] text-center">
                        <h2 className="font-bold md:text-4xl text-2xl text-[#202124] mb-[50px] text-left ml-8">How <span className='text-[#F05108]'>We</span> differ?
                        </h2>

                        <div className='flex justify-center mb-4'>
                           <Image src={"../../assets/images/4pillar.png"} width='250' height='300' alt='/' />
                        </div>
                     </div>

                  <div className="grid grid-cols-4 justify-center m-auto">

                     <div className="w-full px-4 ">
                        <div className="mb-8 rounded-[200px] bg-white ">

                           <div className='flex justify-center md:h-[110px]'>
                              <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                                 <div className="p-4">
                                    <div className='flex justify-center'>
                                       <Image src={"../../assets/images/Icon1.png"} width='1000' height='1000' className='w-10' alt='/' />
                                    </div>
                                    <p className="text-[14px] p-2 text-center font-semibold">{"Customer Centric"}</p>
                                 </div>
                              </div>
                           </div>

                           <p className="text-body-color text-xs mt-4 text-justify">
                              We pride ourselves in customer success
                              stories and drive to establish long term
                              relationships. Our engagements
                              typically lead us to become trusted
                              advisors to our clients with 100%
                              customer satisfaction.
                           </p>
                        </div>
                     </div>

                     <div className="w-full px-4">
                        <div className="mb-8 rounded-[20px] bg-white">

                           <div className='flex justify-center md:h-[110px]'>
                              <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                                 <div className="p-4">
                                    <div className='flex justify-center'>
                                       <Image src={"../../assets/images/Icon2.png"} width='1000' height='1000' className='w-10' alt='/' />
                                    </div>
                                    <p className="text-[14px] p-2 text-center font-semibold">{"Risk Management"}</p>
                                 </div>
                              </div>
                           </div>

                           <p className="text-body-color text-xs mt-4 text-justify">
                              {` We perform quarterly independent
                                 reviews of the solutions (Services and
                                 products) we deliver along with the
                                 health of project/services and
                                 recommend mitigation plans.`}
                           </p>
                        </div>
                     </div>

                     <div className="w-full px-4">
                        <div className="mb-8 rounded-[20px] bg-white">

                           <div className='flex justify-center md:h-[110px]'>
                              <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                                 <div className="p-4">
                                    <div className='flex justify-center'>
                                       <Image src={"../../assets/images/icon3.png"}width='1000' height='1000' className='w-10' alt='/' />
                                    </div>
                                    <p className="text-[14px] p-2 text-center font-semibold">{"Experience"}</p>
                                 </div>
                              </div>
                           </div>

                           <p className="text-body-color text-xs mt-4 text-justify">
                              With deep industry knowledge
                              experience in both products and
                              services; we use a “Why NOT"
                              approach to align with leading
                              practices, processes, and system
                              designs.
                           </p>
                        </div>
                     </div>

                     <div className="w-full px-4">
                        <div className="mb-8 rounded-[20px] bg-white">

                           <div className='flex justify-center md:h-[110px]'>
                              <div className="w-[180px] bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden hover:border-[#75EAE2] border-2">
                                 <div className="p-4">
                                    <div className='flex justify-center'>
                                       <Image src={"../../assets/images/icon4.png"} width='1000' height='1000' className='w-8' alt='/' />
                                    </div>
                                    <p className="text-[14px] p-2 text-center font-semibold">{"Strategic Vision"}</p>
                                 </div>
                              </div>
                           </div>

                           <p className="text-body-color text-xs mt-4 text-justify">
                              We invest in solutions that are geared
                              towards market trends, the latest
                              technologies, and products. We bring in
                              a balanced approach to look at current
                              market trends and future releases of our products and services to align with the current requirements.
                           </p>
                        </div>
                     </div>

                  </div>
               </div>

            </div>
         </section>

         <section className="pt-2 lg:pt-[20px] lg:pb-[40px] my-20">
            <div className="container">

               <div className="md:grid grid-cols-3 gap-16">

                  <div className="">
                     <Image width={"1000"} height={"1000"} src={"../assets/images/home-banner/servicenew.png"} className='w-full object-cover' alt='/' />
                  </div>

                  <div className="md:col-span-2">
                     <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">

                           <div className="mx-auto mb-2 max-w-[100%] text-center lg:mb-10 mt-2">
                              <h2 className="font-bold md:text-[20px] text-[16px] leading-[44px] md:leading-[52px] md:text-heading-3 text-left ml-8 md:mb-[10px] lg:mb-[5px]">OUR SERVICES</h2>
                              <h2 className="font-bold md:text-4xl text-2xl text-[#202124] mb-[50px] text-left ml-8">We Served as your wish for success
                              </h2>
                           </div>

                        </div>
                     </div>
                     <div className="-mx-4 grid grid-cols-3 px-4">

                        <div className="w-full px-4">
                           <div className="mb-8 rounded-[20px] bg-white">
                              <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                 <Image width={"1000"} height={"1000"} src={"../assets/images/servicen1.png"} className='object-cover w-32' alt='/' />
                              </div>
                              <h4 className="text-dark mb-3 text-sm font-semibold">
                                 Software Development
                              </h4>
                              <p className="text-body-color text-xs">
                                 Custom software solutions for seamless business operations.
                              </p>
                              <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                              </div>
                           </div>
                        </div>

                        <div className="w-full px-4">
                           <div className="mb-8 rounded-[20px] bg-white">
                              <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                 <Image width={"1000"} height={"1000"} src={"../assets/images/servicen2.png"} className='object-cover w-32' alt='/' />
                              </div>
                              <h4 className="text-dark mb-3 text-sm font-semibold">
                                 Web Development
                              </h4>
                              <p className="text-body-color text-xs">
                                 Crafting captivating and functional websites tailored to your brand.
                              </p>
                              <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                              </div>
                           </div>
                        </div>

                        <div className="w-full px-4">
                           <div className="mb-8 rounded-[20px] bg-white">
                              <div className="bg-primary mb-1 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                                 <Image width={"1000"} height={"1000"} src={"../assets/images/servicen2.png"} className='object-cover w-32' alt='/' />
                              </div>
                              <h4 className="text-dark mb-3 text-sm font-semibold">
                                 Web Development
                              </h4>
                              <p className="text-body-color text-xs">
                                 Crafting captivating and functional websites tailored to your brand.
                              </p>
                              <div className="w-1/6 border border-[#75EAE2] border-b-4 border-l-0 border-r-0 border-t-0 mt-2">
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

               </div>

            </div>
         </section>

         <div id='about' className='mx-auto md:p-4 w-full bg-no-repeat bg-cover text-center md:bg-enabled_decks md:mt-5' >
            <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8'>

               <div>
                  <div className='bg-mpbile_enabled_decks bg-no-repeat bg-cover px-2 md:my-2'>
                     <div className='flex justify-between'>
                        <h2 className="font-bold md:text-3xl text-2xl text-[#152C4E] text-left">UI-Apps SAP Solution</h2>
                        <Image width={"1000"} height={"1000"} className='md:w-32' src={"../assets/images/sap-partner.png"} />
                     </div>

                     <h2 className="font-bold md:text-1xl text-2xl text-[#152C4E] text-left">Automated Data Processing, Accelerated
                        Automated Data Processing
                     </h2>
                     <p className='py-2 text-gray-600 text-left'>
                        {`An easy-to-use role-based UI application that provides a simple and secure way to migrate
                        (Import/Export) your employee payroll data
                        securely into the SAP Success Factors
                        Employee Central Payroll or SAP Private Cloud
                        Payroll Systems.`}
                     </p>
                  </div>

                  <div className='bg-mpbile_enabled_decks bg-no-repeat bg-cover px-2 md:my-5'>
                     <div className='flex justify-between'>
                        <h2 className="font-bold md:text-3xl text-2xl text-[#152C4E] text-left">ERP Solution</h2>
                        <Image width={"1000"} height={"1000"} className='md:w-32' src={"../assets/images/erp-solution.png"} />
                     </div>

                     <h2 className="font-bold md:text-1xl text-2xl text-[#152C4E] text-left">Empowering Education, Connecting Futures
                     </h2>
                     <p className='py-2 text-gray-600 text-left'>
                        {`A user-friendly role-based UI application streamlines school data management. Easily migrate student information and academic records into the School ERP system, ensuring a secure and efficient process for your institution.`}
                     </p>
                  </div>
               </div>

               <div className='w-full h-auto -mt-20 m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                  <Image width={"1000"} height={"1000"} src={AboutImg} className='w-full' alt='/' />
               </div>
            </div>
         </div>

         <div className='mx-auto md:max-w-6xl container'>
            <div className='md:grid grid-cols-2 md:my-20'>
               <div className="rounded-lg">
                  <Image width={"1000"} height={"1000"} src={"../../assets/images/sapsolution-circule.png"} className='' alt='/' />
               </div>

               <div className='mb-8 px-12'>
                  <div className='content-start md:mt-24'>
                     <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Streamline your Workload"}</h2>
                     <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
                        {`Our comprehensive solution is designed to streamline your workload effectively. With our
              services, you can effortlessly tackle payroll data conversion, ensuring a seamless transition.
              Importing legacy payroll results and year-end adjustments becomes a breeze, reducing
              complexity and saving valuable time. We simplify bonus payments and make it hassle-free.
              Exporting payroll master data is made efficient, and uploading benefits deductions is a
              straightforward process. Embrace our services to optimize your workflow and enhance
              productivity.`}
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div className='mx-auto md:max-w-6xl container'>
            <div className='md:grid grid-cols-2 md:my-20'>

               <div className='mb-8 px-12'>
                  <div className='content-start md:mt-4'>
                     <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"IT Consulting Services"}</h2>
                     <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
                        {`Great Businesses set the vision for a better future and the right innovation partner will get you there. We are the experts in Technology and can collaborate with your business experts to develop a successful project plan. We help build the roadmap out a Business Strategy by analyzing their current state of IT, present IT trends, and help make decisions regarding their Technology needs and decision making. We will be available 24/7 if you want to try us to make that difference.`}
                     </p>
                  </div>
               </div>

               <div className="rounded-lg">
                  <Image width={"1000"} height={"1000"} src={"../../assets/images/consultant.jpg"} className='' alt='/' />
               </div>

            </div>
         </div>

         <div className='mx-auto md:max-w-6xl container'>
            <div className='md:grid grid-cols-2 md:my-20'>

               <div className="rounded-lg flex justify-center">
                  <Image width={"1000"} height={"1000"} src={"../../assets/images/stremming.png"} className='md:w-[400px]' alt='/' />
               </div>

               <div className='mb-8 px-12'>
                  <div className='content-start md:mt-4'>
                     <h2 className="font-bold md:text-2xl text-2xl text-black text-left py-4">{"Streamline School Management with SLRIS Edumatic"}</h2>
                     <p className='md:py-2 py-2 text-gray-600 text-justify md:text-sm'>
                        {`Discover SLRIS Edumatic's comprehensive suite of education management solutions,
designed to enhance school operations and elevate the learning experience. Our Learning
Management System (LMS) introduces interactivity and engagement to education, while our
robust Assessment tools provide real-time insights into student performance, empowering
informed decision-making.`}
                     </p>
                  </div>
               </div>

            </div>
         </div>

         <Testimonial />
         <Brandss />
         <Storyteller />
         <Contact />
      </>

   )
}
