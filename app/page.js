import Notes from "@/app/notes"
import Link from 'next/link'


export default function Home(props) {
  return (
    <div className="flex flex-col mb-10 py-2 md:mx-40 sm:mx-10 bg-slate-50">
      <navbar className="py-5 font" >
        <Link className='font-bold mr-3 text-xl underline' href="/" >Home</Link>
        <Link className='font-bold mr-3 text-xl underline' href="/" >Notes</Link>
      </navbar>
      <div className="bg-blue">
        <div className="flex flex-col-3 pt-5 py-3">
          <h1 className='font-extrabold from-stone-950 mt-4 text-3xl' >Notes</h1>
        </div>
        <div className="flex flex-wrap justify-between bg-green-10 ">
          {Notes.map((note) => {
            return (
              <div key={note.id} className="bg-customYellow w-80 h-50 pt-8 pr-8  pl-2 mr-4 my-1 h-auto border-r-8 border-r-slate-200 border-b-8 border-b-slate-200 border-r-3">
                <h3 className='font-bold  text-lg pb-1' >{note.noteTitle}</h3>
                <p className='font-medium mt-1' >{note.noteContent} </p>
                <p className='font-mono text-xs pt-10 pb-2' >{note.createdAt}</p>
              </div>
            )
          })}
        </div>
        <div className='flex-col pt-10 h-78 w-50 ' >
          <h1 className=' text-xl font-extrabold mb-5' >Create a new Note</h1>
          <input className='block mb-2 border-5 border-slate-400 border-2 rounded w-48' rows="200" cols="2" type="text" id='noteTitle' placeholder='Title...' />
          <textarea name="m-2 border-3 mb-2 border-slate-400" id="note" cols="25" rows="5" placeholder='Enter note...' />
          <button className='block bg-black text-customYellow font-medium m-5 px-5 py-1 rounded hover:px-6 hover:py-2 hover:text-black hover:bg-customYellow hover:font-semibold ease-in-out duration-300' type="button">Submit</button>
        </div>
      </div>
    </div>
  )
}