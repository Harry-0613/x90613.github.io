import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

export default function AboutMe() {
  return (
    <div className=" justify-evenly h-screen md:flex ">
      <div className="flex flex-col justify-center items-center ml-10">
      <Avatar className="ml-3 mt-2 overflow-hidden rounded-full border-2 border-gray-200" style={{ width: '150px', height: '150px' }}>
        <AvatarImage src="./avator.jpg" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center justify-center text-white">
        <div className="leading-loose text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-black">
          Hi, I&apos;m Harry
        </div>
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-black animate-wiggle">
          I&apos;m a software engineer
        </div>
        <div className=" text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-black animate-wiggle ">
          CSIE @ National Taiwan University
        </div>
        <div className=" text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-600 via-slate-800 to-black animate-wiggle ">
          You can reach me via &nbsp;
          <a href="mailto:r12944038@csie.ntu.edu.tw">r12944038@csie.ntu.edu.tw</a>
        </div>
      </div>
      </div>
      <div className="md:w-1/2 w-3/4 mt-5 ml-5 flex flex-col justify-center  items-start ">
        <div className="p-10 border border-white rounded-xl bg-gray-800 text-white">
        {" "}
        <section>
          <h1 className=" text-4xl font-extrabold">Experience</h1>
          {/* divider */}
          <div className="w-full h-1 bg-gray-400 my-5"></div>
          <p></p>
        </section>
        <section className="mb-3">
          <h1 className=" text-xl font-extrabold">
          MediaTek - Research Assistant (Feb 2024 - Now)
          </h1>
          <ul className="list-disc ml-4">
            <li>Researched code optimization techniques to speed up the performance.</li>
          </ul>
          {/* divider */}
          {/* <div className="w-full h-[1px] bg-gray-400 my-2"></div> */}
        </section>
        <section className="mb-3">
          <h1 className=" text-xl font-extrabold">
          Beauty321 - Data Engineering Intern (Jul 2023 - Oct 2023)
          </h1>
          <ul className="list-disc ml-4">
            <li>Established ETL (Extract, Transform, Load) processes to convert user web browsing data into structured data for analysis.</li>
            <li>Enhanced advertising sales by analyzing website user preferences and behavior patterns.</li>
          </ul>
          {/* divider */}
          {/* <div className="w-full h-[1px] bg-gray-400 my-2"></div> */}
        </section>
        <section className="mb-3">
          <h1 className=" text-xl font-extrabold">
            CTBC - Software Intern (Jul 2022 - Jun 2023)
          </h1>
          <ul className="list-disc ml-4">
            <li>Refactored existing functions to enhance code readability and performance.</li>
            <li>Engineered user interfaces enabling employees across departments to directly access data from the database, effectively reducing communication costs and time between departments.</li>
          </ul>
          {/* divider */}
          {/* <div className="w-full h-[1px] bg-gray-400 my-2"></div> */}
        </section>
        </div>
      </div>

      {/* Write a introduction */}
    </div>
  );
}
