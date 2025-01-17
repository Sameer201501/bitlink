import Image from "next/image";
import Link from "next/link"; 

 

export default function Home() {
  return (
   <main>
    <section className="grid grid-cols-2 h-[50vh]" >
      <div className="flex flex-col gap-4 items-center justify-center " >
        <p className="text-3xl font-bold " >
          The best URL Shortener in the Market
        </p>
        <p>
          We are the most straightforward URL shortener in the world.
        </p>
        <li className='flex gap-3  '  >
        <Link href='/generate' ><button  className='rounded-lg shadow-lg bg-purple-500 p-2  text-white hover:bg-purple-300 ' >Try Now</button> </Link>
        <Link href='/gitHub' ><button  className='rounded-lg shadow-lg bg-purple-500 p-2 text-white  hover:bg-purple-300 ' >GitHub</button> </Link>

        </li>
      </div>
      <div className="bg-red-500" >
        
      </div>

    </section>
   </main>
  );
}
