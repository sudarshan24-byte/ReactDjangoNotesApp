import React from 'react'
import { Link } from 'react-router-dom'
import { GrAdd } from 'react-icons/gr'
import style from '../style'

const AddButton = () => {
    return (
        <Link to='/note/new' className={style.button}>
            <GrAdd />
        </Link>
    )
}

export default AddButton