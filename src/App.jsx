import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router/Router'

const App = () => {
  return <RouterProvider router={myRouter} />
}

export default App