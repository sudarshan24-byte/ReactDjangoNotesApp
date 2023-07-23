import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AddButton from '../components/AddButton'
import style from '../style'

const NotesPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/v1/notes/')
        let data = await response.json()
        setNotes(data)
        // console.log(data)
    }

    return (
        <div>
            <div className='flex items-center bg-[#383838] justify-between py-[10px] px-[16px]'>
                <div className='text-[24px] text-main mr-2 font-[600]'>&#9782; Notes</div>
                <div className='text-[18px] font-[600] text-gray'>{notes.length}</div>
            </div>

            <div className='p-0 mx-0 h-[70vh] overflow-y-auto bg-lighter shadow-xl'>
                {notes.map((note, index) => (
                    <div className='mt-2 text-md bg-white shadow-md' key={index}>
                        <Link to={`/note/${note.id}`}>

                            <div className={style.notes_list}>
                                {note.body.length <= 50 ? note.body.slice(0, 50) : `${note.body.slice(0, 50)}...`}
                            </div>

                        </Link>
                    </div>
                ))}
            </div>
            <AddButton />
        </div>
    )
}

export default NotesPage