
const Button = ({label,iconURl}) => {
  return (
   <button className='flex justify-center gap-2 items-center
   px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red '>
    {label}
    <img
    src={iconURl}
    alt='arrow right icon'
     className='ml-2 rounded-full
     w-5 h-5'/>
   </button>
  )
}

export default Button;