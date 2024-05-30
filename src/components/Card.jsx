import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
import { motion } from "framer-motion"

function Card({ data,reference }) {
  return (
    <motion.div drag dragConstraints={reference} className='relative h-72 w-56 bg-zinc-600 text-white rounded-[50px] py-10 px-8 overflow-hidden'>
      <FaRegFileAlt />
      <p className='mt-5 text-sm leading-tight'>{data.desc}</p>

      <div className='footer  absolute  w-full left-0 bottom-0'>

        <div className='flex px-8 py-4 justify-between items-center '>
          <h1>{data.filesize}</h1>
          <span className='h-6 w-6 bg-zinc-800 rounded-full flex justify-center items-center mb-2'>

            {close ? <IoCloseSharp size={12} /> : <FiDownload size={12} />}

          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex justify-center text-center items-center font-semibold`}>
            <h3>{data.tag.tagTitle}</h3>
          </div>
        )}



      </div>

    </motion.div>
  )
}

export default Card