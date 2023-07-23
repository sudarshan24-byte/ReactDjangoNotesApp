import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import style from '../style'

const NotePage = () => {
    let { id } = useParams()
    let navigate = useNavigate()

    const [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [id])

    let getNote = async () => {
        if (id == 'new') return

        let response = await fetch(`/api/v1/notes/${id}`)
        let data = await response.json()
        setNote(data)
        // console.log(data)
    }

    let updateNote = () => {
        fetch(`/api/v1/notes/${id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let createNote = () => {
        fetch(`/api/v1/notes/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let deleteNote = async () => {
        await fetch(`/api/v1/notes/${id}/delete`, {
            method: "DELETE",
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }

    let handleSubmit = async () => {
        if (id !== 'new' && !note.body) {
            await deleteNote()
        } else if (id !== 'new') {
            await updateNote()
        } else if (id == 'new' && note !== null) {
            await createNote();
            navigate('/')
        }

    }

    return (
        <div className='' >
            <div className='flex items-center justify-between text-main p-[10px]'>
                <div className='flex items-center text-3xl' onClick={handleSubmit}>
                    <Link to='/'>
                        <IoIosArrowBack />
                    </Link>
                </div>
                {id !== 'new' ?
                    <button className='flex items-center' onClick={deleteNote}>
                        <RiDeleteBin6Fill />
                    </button>
                    : <button className='flex items-center' onClick={handleSubmit}>Done</button>
                }
            </div>
            <textarea onChange={(e) => { setNote({ ...note, 'body': e.target.value }) }} defaultValue={note?.body} className={style.textarea}></textarea>
        </div>
    )
}

export default NotePage