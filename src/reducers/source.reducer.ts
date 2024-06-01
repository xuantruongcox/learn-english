import { createAction, createReducer } from '@reduxjs/toolkit'
import { sessions } from '../constants/sources'
import { Session } from '../types/source.type'

interface SourceState {
  sessions: Session[]
  selected: Session
}

const initialState: SourceState = {
  sessions: sessions,
  selected: sessions[0]
}

export const selectedVideo = createAction<Session>('source/selectedVideo')

const SourceReducer = createReducer(initialState, (build) => {
  build.addCase(selectedVideo, (state, action) => {
    state.selected = action.payload
  })
})

export default SourceReducer
