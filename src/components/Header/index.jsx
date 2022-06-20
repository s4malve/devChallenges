import GlassModal from '../../components/GlassModal'
import PatternOne from '../../components/PatternOne'

function Header() {
  return (
    <header className='flex gap-y-10 flex-col lg:flex-row gap-x-10 lg:justify-between justify-center items-center min-h-screen py-8 md:p-0'>
      <div className='relative w-full max-w-md'>
        <PatternOne className='w-full max-w-md' />
        <div className='absolute -top-4 left-4 sm:top-14 sm:right-4'>
          <GlassModal>
            <GlassModal.Comment>{'//'} Card</GlassModal.Comment>
            <pre>const Card {'= () => {'}</pre>
            <pre> return {'('}</pre>
            <pre>{'  <div className="flex">'}</pre>
            ...
          </GlassModal>
        </div>
        <div className='absolute bottom-2 md:-right-12 lg:-right-8 left-8'>
          <GlassModal>
            <GlassModal.Comment>{'//'} styles.css</GlassModal.Comment>
            <pre>
              .card {'{'} <br />
              {'  '}background-color: #fff; <br />
              {'  '}... <br />
              {'}'}
            </pre>
          </GlassModal>
        </div>
      </div>
      <div className='grid gap-y-5 md:max-w-xl'>
        <h1 className='text-4xl sm:text-5xl font-bold'>
          All of the{' '}
          <span className='font-semibold text-primary'>
            {'{'}devChallenges{'}'}
          </span>{' '}
          solutions i have worked on.
        </h1>
        <p className='text-stone-400 text-base sm:text-lg italic'>
          {'//'} This landing page is a collection of my devChallenges
          solutions. I have solved a lot of them, and I wanted to share them
          with you.
        </p>
        <div className='flex items-center gap-x-3 mt-5'>
          <a href='#projects' className='btn btn-primary ml-4'>
            See All
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
