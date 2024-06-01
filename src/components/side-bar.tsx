import { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { Session } from '../types/source.type'
import { selectedVideo } from '../reducers/source.reducer'

export default function Sidebar() {
  const sessions: Session[] = useSelector((state: RootState) => state.sources.sessions)
  // const session: Session = useSelector((state: RootState) => state.sources.selected)
  // const [selected, setSelected] = useState(false)
  const dispatch = useDispatch()
  const handleSelect = (e: FormEvent, session: Session) => {
    e.preventDefault()
    dispatch(selectedVideo(session))
  }
  return (
    <div className='wrapper w-[320px] fixed h-[100vh] [&:not(&:hover)]:scrollbar-hide overflow-auto shadow-[rgba(0,0,15,0.5)_-20px_0px_50px_0px]'>
      <ul>
        {sessions.map((source, index) => (
          <li className='w-full' key={index}>
            <button
              onClick={(e) => handleSelect(e, source)}
              className={`block w-full bold text-3xl border-b-2 border-[#e9e9e9] px-4 py-3 text-center`}
            >
              Bài{index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
