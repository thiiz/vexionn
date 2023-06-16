import Image from "next/image"

const Phones = () => {
  return (
    <div className='relative lg:-top-28 -z-[1]'>
      <div className='relative
       after:content-[""]
       after:bg-gradient-to-br
       after:from-[#05050A]
       after:from-10%
       after:w-1/2
       after:h-3/4
       after:left-0
       after:top-0
       after:absolute
       '>
        <Image src='/top-bg.png' alt='background' width={3200} height={1740} className='mx-auto' />
      </div>
      <Image src='/phones.png' width={1132} height={556} alt="3 smartphones" className='absolute bottom-0 left-1/2 -translate-x-1/2' quality={100} />
    </div>
  )
}
export { Phones }