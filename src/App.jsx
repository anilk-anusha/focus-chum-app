import { useState } from 'react'
import JSConfetti from 'js-confetti'
const jsConfetti = new JSConfetti()

//component imports
import IntroForm from './components/IntroForm'
import OneTask from './components/OneTask'


function getSuccessMessage() {
  const messages = ["Congrats!", "Great job!", "Well Done!", "Up, up, and up!", "Woohoo!", "Way to go!", "Awesome!", "Let's go!", "You got this!", "YES!", "Yay!", "Yeah!"];
  return messages[Math.floor(Math.random() * messages.length)];
}


function App() {
  const [task, setTask] = useState("")
  const [isCompleted, setIsCompleted] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(false)
  }

  const handleInput = (e) => {
    setTask(e.target.value);
  }

  const handleCompletedTask = async (e) => {
    e.target.setAttribute('disabled', true);
    setTask(getSuccessMessage());
    await jsConfetti.addConfetti({
      emojis: ["🎉", "🎈", "✅"]
    })
    e.target.removeAttribute('disabled');
    setTask("");
    setIsCompleted(true);
  }


  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-cyan-200 to-slate-200 ">
      <div className="grid place-items-center gap-8 m-8">
        {
          isCompleted && <IntroForm
            task={task}
            handleInput={handleInput}
            handleSubmit={handleSubmit} />
        }
        {
          !isCompleted && <OneTask
            task={task}
            handleCompletedTask={handleCompletedTask} />
        }
      </div>

      {/* <footer class="fixed bottom-0 left-0 z-20 w-full p-2 shadow md:flex md:items-center md:justify-between md:p-2.5">
        <span class="text-sm text-gray-500 sm:text-center">Made with ❤️ from <a href="https://anusha-anilkumar.netlify.app/" class="hover:underline">Anusha Anil Kumar</a>.
        </span>
      </footer> */}

      <footer className="fixed bottom-0 left-0 z-20 w-full p-2 md:flex md:items-center md:justify-around">
        <span className="text-sm text-gray-500 sm:text-center">Made with ❤️ from <a href="https://anusha-anilkumar.netlify.app/" class="hover:underline">Anusha Anil Kumar</a>
        </span>
      </footer>

    </main>

  )
}

export default App
