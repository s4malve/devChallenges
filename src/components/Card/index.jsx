import PropTypes from 'prop-types'

function Card({ id, title, cover, difficulty, description }) {
  return (
    <a href={`/projects/${id}`} key={title}>
      <article className='rounded-sm border-stone-600 border hover:border-stone-500 hover:shadow-md dark:hover:shadow-stone-800 hover:shadow-stone-200'>
        <img
          src={cover}
          alt=''
          className='w-full rounded-tr-sm rounded-tl-sm'
        />
        <div className='mt-8 grid gap-y-3 relative pt-3 pl-6 pb-6'>
          <span
            className='py-2 px-4 rounded-sm capitalize absolute bg-primary font-semibold text-stone-700 text-sm left-5 -top-11'
            style={{ backgroundColor: difficulty.color }}
          >
            {difficulty.name}
          </span>
          <h3 className='font-bold text-2xl'>{title}</h3>
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
