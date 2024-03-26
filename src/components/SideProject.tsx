import Link from "next/link";

export default function SideProject() {
  return (
    <main className="flex flex-col w-full">
      <h1 className=" text-4xl font-bold bg-gradient-to-r from-slate-600 via-slate-800 to-black   text-stone-300">
        Side Project
      </h1>
      <div className="grid grid-cols-3 gap-4 ">
        <Link
          className=" border-2 border-gray-400 shadow-black p-4 rounded-md shadow-md font-bold hover:scale-105  transition-all hover:bg-blue-400  "
          href="https://github.com/Tomlord1122/Traveler">
          Traveler
        </Link>
        <Link
          className=" border-2 border-gray-400 shadow-black p-4 rounded-md shadow-md font-bold hover:scale-105  transition-all  hover:bg-blue-400 "
          href="https://github.com/Tomlord1122/Tomlord1122.github.io">
          Portfolio
        </Link>

        <Link
          className=" border-2 border-gray-400 shadow-black p-4 rounded-md shadow-md font-bold hover:scale-105  transition-all  hover:bg-blue-400 "
          href="https://github.com/Tomlord1122/mini-c-shell">
          mini-c-shell
        </Link>
        <Link
          className=" border-2 border-gray-400 shadow-black p-4 rounded-md shadow-md font-bold hover:scale-105  transition-all  hover:bg-blue-400 "
          href="https://github.com/Tomlord1122/Dcard-Backend-Intern">
          mini-ads-services
        </Link>
        <Link
          className=" border-2 border-gray-400 shadow-black p-4 rounded-md shadow-md font-bold hover:scale-105  transition-all  hover:bg-blue-400 "
          href="https://github.com/Tomlord1122/kernel-module-practice-/tree/main">
          kernel-module-practice
        </Link>
      </div>
    </main>
  );
}