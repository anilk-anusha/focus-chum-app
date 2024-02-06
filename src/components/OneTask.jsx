// component imports
import DoneButton from './DoneButton'

const OneTask = ({ task, handleCompletedTask }) => {
  return (
    <>
      <h1 className='text-3xl sm:text-5xl font-bold font-lexend text-center'>{task}</h1>
      <DoneButton 
        text="Mark Done"
        handleCompletedTask={handleCompletedTask}
      />
    </>
  )
}

export default OneTask