import Image from "next/image"

const Partners = () => {
  return (
    <div className='container mx-auto mt-14 flex flex-col items-center'>
      <span className='mb-8 text-[#7F7F90] text-lg'>These companies work with us</span>
      <div className='flex justify-between w-full'>
        <div className='relative  w-[83px] h-[32px]'>
          <Image className='object-contain' fill src='/logos/logo01.png' alt='logo' />
        </div>
        <div className='relative w-[83px] h-[32px]'>

          <Image className='object-contain' fill src='/logos/logo02.png' alt='logo' />
        </div>
        <div className='relative  w-[83px] h-[32px]'>
          <Image className='object-contain' fill src='/logos/logo03.png' alt='logo' />
        </div>
        <div className='relative  w-[83px] h-[32px]'>
          <Image className='object-contain' fill src='/logos/logo04.png' alt='logo' />
        </div>
        <div className='relative w-[83px] h-[32px]'>
          <Image className='object-contain' fill src='/logos/logo05.png' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export { Partners }