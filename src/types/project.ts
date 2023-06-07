import { ImageDataLike } from "gatsby-plugin-image"

export type Project = {
  title: string
  date: string
  slug: string
  image: ImageDataLike | null
}
