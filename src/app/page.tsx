import { Hero } from '@/components/hero'
import { Partners } from '@/components/partners'
import { Phones } from '@/components/phones'

export default function Home() {
  return (
    <main>
      <Hero />
      <Phones />
      <Partners />
      <div className='container mx-auto mt-28'>
        <div className='flex flex-col items-center'>
          <span className='text-2xl uppercase font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#dde2f2] via-[#b1bdea] to-[#f4f1f7]'>Vexion app</span>
          <span className='text-6xl uppercase'>Universal Application</span>
          <span className='text-base text-[#7F7F90] mt-6'>Our app makes your internet control smarter than you think.</span>
        </div>
        <div className='mt-20 flex items-center justify-center gap-x-4'>
          <div className='
        w-[385px] h-[699px]
        rounded-3xl
        bg-gradient-to-t from-[#05050a] to-[#111115]
      shadow-sm
      shadow-neutral-900
'>
          </div>
          <div className='flex flex-col gap-y-4'>
            <div className='
        w-[385px] h-[297px]
        rounded-3xl
        bg-gradient-to-t from-[#05050a] to-[#111115]
        shadow-sm
        shadow-neutral-900
        '>
            </div>
            <div className='
        w-[385px] h-[386px]
        rounded-3xl
        bg-gradient-to-t from-[#05050a] to-[#111115]
        shadow-sm
        shadow-neutral-900
        '>
            </div>
          </div>
          <div className='flex flex-col gap-y-4'>
            <div className='
        w-[385px] h-[386px]
        rounded-3xl
        bg-gradient-to-t from-[#05050a] to-[#111115]
        shadow-sm
        shadow-neutral-900
        '>
            </div>
            <div className='
        w-[385px] h-[297px]
        rounded-3xl
        bg-gradient-to-t from-[#05050a] to-[#111115]
        shadow-sm
        shadow-neutral-900
        '>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}
