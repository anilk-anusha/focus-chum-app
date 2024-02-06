
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const FocusChumForm = ({ task, handleInput, handleSubmit}) => {
    return (
      <>
        <h1 className='text-4xl sm:text-6xl font-lexend font-bold tracking-wide text-center'>Focus Chum 🎯</h1>
            <h1 className='text-2xl sm:text-4xl font-roboto text-center'>one task, one focus, ultimate success!</h1>
            <form className='flex ring-4 rounded-md ring-slate-200  dark:ring-slate-800 focus-within:ring-teal-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800' onSubmit={handleSubmit}>
              <input type="text"
                className='bg-inherit rounded-md font-roboto text-slate-800  py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full'
                placeholder='Enter your one task'
                autoFocus
                maxLength="65"
                value={task}
                onInput={handleInput}
              />
              <button className='bg-inherit rounded-md font-sans text-slate-800  py-2 pr-3 focus:outline-none focus:text-teal-600 hover:text-teal-600'>
                <CheckCircleIcon className="h-12 w-12" />
              </button>
            </form>
      </>
    )
  }
  export default FocusChumForm;