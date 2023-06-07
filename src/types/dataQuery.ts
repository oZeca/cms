import type { ImageDataLike } from "gatsby-plugin-image"
import { Project } from "./project"

export type DataProps = {
  allMdx: {
    nodes: [
      {
        frontmatter: Project
      }
    ]
  }
  file: {
    childrenImageSharp: Array<ImageDataLike>
  }
}
