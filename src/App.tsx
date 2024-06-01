import { useSelector } from 'react-redux'
import Sidebar from './components/side-bar'
import { RootState } from './store'
import { Session, Video } from './types/source.type'
import ReactPlayer from 'react-player'

function App() {
  const session: Session = useSelector((state: RootState) => state.sources.selected)
  const video: Video | undefined = session.sources && session.sources[0]
  // useEffect(() => {}, [])
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 w-full h-[100vh]'></div>
      <div className='relative flex items-center justify-center'>
        {video && <ReactPlayer width={'80%'} height={'50%'} controls={true} url={video.src} />}
      </div>
    </div>
  )
}

export default App
