import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

const SosmedCard = () => {
  return (
    <div className='flex flex-wrap gap-5 pt-5'>
      <a href="https://www.linkedin.com/in/mohamad-akbar-hernanda-861831247/">
        <FaLinkedin className='card-sosmed' />
      </a>
      <a href="https://www.instagram.com/barrhn_/">
        <FaInstagram className='card-sosmed' />
      </a>
      <a href="https://github.com/MohAkbar19">
        <FaGithub className='card-sosmed' />
      </a>
      <a href="#">
        <FaTiktok className='card-sosmed' />
      </a>
      <a href="akbarxx@gmail.com">
        <MdOutlineMail className='card-sosmed' />
      </a>
    </div>
  )
}

export default SosmedCard
