import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
const Navbar = () => {

  const navigate = useNavigate();

  const[showMenu, setShowMenu] = useState(false)
  const[loginToken, setLoginToken]  = useState(true)

 {/* mintMist, oliveWhisper, sageGlow, mossyFog */} 
  return (
    // <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
    <div className='flex items-center justify-between text-sm py-4 px-6 mb-5 bg-mintMist shadow-md sticky top-0 z-50 transition-all duration-300'>

      
      <img onClick={() => navigate('/')} src={assets.logo} alt="DOCQET Logo" className="max-w-[150px] h-[110px] cursor-pointer relative -top-2" />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            {/* <li className='py-1 text-yellow-600'>HOME</li> */}
            <li className='py-1 text-deepTeal hover:text-slate-600 transition duration-300'>HOME</li>

            <hr className='border-none outline-none h-0.5 bg-slate-300 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to = '/doctors'>
            <li className='py-1 text-deepTeal hover:text-slate-600 transition duration-300'>DOCTORS LIST</li>
            <hr className='border-none outline-none h-0.5 bg-slate-300 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to = '/about'>
            <li className='py-1 text-deepTeal hover:text-slate-600 transition duration-300'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-slate-300 w-3/5 m-auto hidden' hidden/>
        </NavLink>
        <NavLink to = '/contact'>
            <li className='py-1 text-deepTeal hover:text-slate-600 transition duration-300'>CONTACT US</li>
            <hr className='border-none outline-none h-0.5 bg-slate-300 w-3/5 m-auto hidden'/>
        </NavLink>
  
      </ul>
      <div className='flex items-center gap-4'>
        {
          loginToken
          ?<div className='flex flex-col items-center gap-2 cursor-pointer group relative'>
              <img className='w-10 mt-5 rounded-full' src={assets.profile_pic} alt=""/>
              <img className='w-3' src={assets.dropdown_icon} alt=""/>
              <div className='absolute top-full mt-2 left-1/2 -translate-x-1/2 text-base font-medium text-goldie z-20 hidden group-hover:block'>

                <div className='min-w-48 bg-deepTeal rounded flex flex-col gap-4 p-4 shadow-md'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-yellow-200 cursor-pointer'>My profile</p>
                  <p onClick={() => navigate('my-appointments')} className='hover:text-yellow-200 cursor-pointer'>My Appointments</p>
                  <p onClick={() => setLoginToken(false)} className='hover:text-yellow-200 cursor-pointer'>Logout</p>
                </div>
              </div>


          </div>

            

          
          
          

          
          :<button onClick={() => Navigate('/login')} className='bg-deepTeal text-stone-100 px-4 py-2 rounded-full font-light hidden md:block'>Create Account</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar

 {/* softCreamy	sandyBeige	leafyGreen	deepForestGreen*/}    