export interface Video {
  src?: string
  type?: string
  label?: string
  res?: number | string
  title?: string
}
export interface Session {
  video_id?: string | null
  sources?: Video[]
}
