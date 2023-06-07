import * as React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { DataProps } from "../../types/dataQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <main className="p-20">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Project</h1>
      <ul>
        {/* @ts-ignore */}
        {/* {data.mdx.frontmatter((node, idx) => ( */}
        <li className="text-gray-500 mb-6 mb-4">
          {/* @ts-ignore */}
          {data.mdx.frontmatter.title} - {data.mdx.frontmatter.date}
        </li>
        {/* ))} */}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
    }
  }
`
