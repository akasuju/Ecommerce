import logo from '../assets/logo.svg'
import profile from '../assets/profile.png'
const Navbar = () => {
  return (
    <nav className='max_padd_container flexBetween bg-white py-12 ring-1 ring-slate-900/5 relative'>
        <div ><img src={logo} alt="" /></div>
            <div className='uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest kine-clamp max-xs:bold-18 max-xs:px-1'>Admin Panel</div>
            <div><img src={profile} alt="" className='h-12 w-12 rounded-full'/></div>
    </nav>
  )
}

export default Navbar