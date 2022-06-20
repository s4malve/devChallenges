import PropTypes from 'prop-types'

function GlassModal({ children }) {
  return (
    <div className='bg-stone-900/5 dark:bg-stone-100/5 text-stone-700 dark:text-stone-100 max-w-sm rounded-sm shadow-md backdrop-blur-lg py-5 px-6 font-mono border border-stone-100/10'>
      {children}
    </div>
  )
}

function Comment({ children }) {
  return (
    <span className=' text-stone-500 dark:text-stone-300 block'>
      {children}
    </span>
  )
}
Comment.displayName = 'Comment'
GlassModal.Comment = Comment
Comment.propTypes = {
  children: PropTypes.node.isRequired
}

GlassModal.propTypes = {
  children: PropTypes.node.isRequired
}

export default GlassModal
