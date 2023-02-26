import './App.scss'
import { Board } from './components/board/board'

function App() {
    return (
        <div className='container'>
            <h1> Kanban Board </h1>
            <Board />
        </div>
    )
}

export default App