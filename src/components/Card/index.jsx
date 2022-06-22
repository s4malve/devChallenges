import PropTypes from 'prop-types'

function Card({ id, title, cover, difficulty, description }) {
  return (
    <a href={`/projects/${id}/index.html`} key={title}>
      <article className='border rounded-sm border-stone-600 hover:border-stone-500 hover:shadow-md dark:hover:shadow-stone-800 hover:shadow-stone-200'>
        <figure className='overflow-hidden'>
          <img
            src={cover}
            alt=''
            className='w-full transition-transform rounded-tl-sm rounded-tr-sm hover:scale-105'
          />
        </figure>
        <div className='relative grid pt-3 pb-6 pl-6 mt-8 gap-y-3'>
          <span
            className='absolute px-4 py-2 text-sm font-semibold capitalize rounded-sm bg-primary text-stone-700 left-5 -top-11'
            style={{ backgroundColor: difficulty.color }}
          >
            {difficulty.name}
          </span>
          <h3 className='text-2xl font-bold'>{title}</h3>
          <p className='text-stone-400'>{description}</p>
        </div>
      </article>
    </a>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  cover: PropTypes.string,
  difficulty: PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string
  }),
  description: PropTypes.string
}

export default Card
