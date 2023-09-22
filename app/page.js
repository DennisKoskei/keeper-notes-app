import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col mb-10 py-2 md:mx-40 sm:mx-10 bg-slate-50">
      <navbar className="py-5 font" >
        <Link className='font-bold mr-3 text-xl underline' href="/" >Home</Link>
        <Link className='font-bold mr-3 text-xl underline' href="/" >Notes</Link>
      </navbar>
      <div className="">
        <div className="flex flex-col-3 pt-5 py-3">
          <h1 className='font-extrabold from-stone-950 mt-4 text-3xl' >Notes</h1>
        </div>
        <div className="flex justify-between bg-green-10 ">
          <div className="bg-customYellow w-96 pt-8 pr-8 pb-2 pl-2 mr-4 my-1 h-auto border-r-8 border-r-slate-200 border-b-8 border-b-slate-200 border-r-3">
            <h3 className='font-bold  text-lg pb-1' >Hello</h3>
            <p className='font-medium mt-1' >Sometimes I like to say that I would do something but end up not doing it </p>
            <p className='font-mono text-xs pt-10 pb-2' >Timestamp of date</p>
          </div>
          <div className="bg-customYellow w-96 pt-8 pr-8 pb-2 pl-2 mr-4 my-1 h-auto border-r-8 border-r-slate-200 border-b-8 border-b-slate-200 border-r-3">
            <h3 className='font-bold  text-lg pb-1' >Hello</h3>
            <p className='font-medium mt-1' >Sometimes I like to say that I would do something but end up not doing it </p>
            <p className='font-mono text-xs pt-10 pb-2' >Timestamp of date</p>
          </div>
          <div className="bg-customYellow w-96 pt-8 pr-8 pb-2 pl-2 mr-4 my-1 h-auto border-r-8 border-r-slate-200 border-b-8 border-b-slate-200 border-r-3">
            <h3 className='font-bold  text-lg pb-1' >Hello</h3>
            <p className='font-medium mt-1' >Sometimes I like to say that I would do something but end up not doing it </p>
            <p className='font-mono text-xs pt-10 pb-2' >Timestamp of date</p>
          </div>
        </div>
        <div className='flex-col pt-10 h-78 w-50 ' >
          <h1 className='text-xl font-extrabold' >Create a new Note</h1>
          <input className='' type="text" id='noteTitle' placeholder='Title...' />
          <textarea name="" id="note" cols="10" rows="3" placeholder='Enter note...' />
          <button className='bg-black text-customYellow font-medium px-5 py-1 rounded hover:text-black hover:bg-customYellow hover:font-semibold' type="button">Submit</button>
        </div>
      </div>
    </div>
  )
}

    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <h1>Keeper App Project</h1>

    // </main>