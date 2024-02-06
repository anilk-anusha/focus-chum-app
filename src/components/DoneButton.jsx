// imports
import { CheckCircleIcon } from '@heroicons/react/24/solid'


const DoneButton = ({ task, handleCompletedTask }) => {
  return (
    <button
      className='flex items-center space-x-3 text-2xl bg-teal-600 px-6 py-3 rounded-md text-slate-200 focus:outline-none focus-visible:ring-4 ring-teal-600 ring-offset-4 ring-offset-slate-200 hover:opacity-80 transition-opacity disabled:opacity-50'
      autoFocus
      onClick={handleCompletedTask}
    >
      {/* <span className="pointer-events-none" >{task}</span> */}
      <CheckCircleIcon className='pointer-events-none w-10 h-10' />
    </button>
  )
}

export default DoneButton