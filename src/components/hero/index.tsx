import { DarkButton } from "../buttons/DarkButton"
import { LightButton } from "../buttons/LightButton"

const Hero = () => {
  return (
    <div className='container mx-auto mt-24'>
      <div className='flex flex-col items-center'>
        <h1 className='flex flex-col items-center uppercase font-semibold '>
          <div className='flex gap-x-3'>
            <span className='text-6xl'>a</span>
            <span className='text-8xl'>universal application</span>
          </div>
          <span className='text-6xl'>To Manage Your</span>
          <span className='text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#d7dee8] to-[#a3aedb]'>Satellite Internet</span>
        </h1>
        <h2 className='text-lg text-[#7F7F90] mt-8'>Control your internet. Check the latency (ms). Keep an eye on the transfer. Test the speed.</h2>
        <div className="mt-14 flex items-center gap-x-4">
          <DarkButton padding='px-10 py-3.5' fontSize='text-lg' weight='font-bold'>
            Learn more
          </DarkButton>
          <LightButton padding='px-10 py-3.5' fontSize='text-lg' weight='font-bold'>
            Get the app
          </LightButton>
        </div>
      </div>
    </div>
  )
}

export { Hero }