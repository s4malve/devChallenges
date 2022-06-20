import Card from '../components/Card'
import Header from '../components/Header'

function App() {
  const projects = []

  return (
    <div className='bg-pattern bg-no-repeat bg-center bg-cover'>
      <div className='w-11/12 max-w-7xl mx-auto'>
        <Header />
        <main className='pb-12 pt-20 lg:pt-14' id='projects'>
          <h2 className='font-bold text-3xl text-center mb-10'>Projects</h2>
          <section className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6'>
            {projects.map(({ cover, difficulty, title, description }) => (
              <Card
                key={title}
                cover={cover}
                difficulty={difficulty}
                title={title}
                description={description}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
