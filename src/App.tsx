import { MainWrapper } from './components/MainWrapper'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <MainWrapper />
      </Router>
    </div>
  )
}

export default App
