import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4'>
      <div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-6'>
        <h1 className='text-2xl font-bold text-center mb-4'>Telegram Shop</h1>
        <p className='text-gray-600 text-center'>Welcome to your shopping experience</p>
        <div className='mt-8'>
          <button
            onClick={() => setCount(count + 1)}
            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
          >
            Count: {count}
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
