import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-2'>
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='logo' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
          ankit_kumar@william.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>Copyright &copy; 2025 All rights reserved | Ankit Kumar</p>
        <ul className='flex items-center gap-10 mt-4 sm:mt-0'>
          <li><a target='_blank' href="https://github.com/ankitkumarwilliam">Github</a></li>
          <li><a target='_blank' href="https://github.com/ankitkumarwilliam">LinkedIn</a></li>
          <li><a target='_blank' href="https://github.com/ankitkumarwilliam">X (Twitter)</a></li>
        </ul>
      </div>
    </div>
  )
}
