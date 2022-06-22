import Card from '../components/Card'
import Header from '../components/Header'

import data from '../data.json'

function App() {
  return (
    <div className='bg-center bg-no-repeat bg-cover bg-pattern'>
      <div className='w-11/12 mx-auto max-w-7xl'>
        <Header />
        <main className='pt-20 pb-12 lg:pt-14' id='projects'>
          <h2 className='mb-10 text-3xl font-bold text-center'>Projects</h2>
          <section className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6'>
            {data.map(({ id, cover, difficulty, title, description }) => (
              <Card
                key={title}
                id={id}
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
