import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { DataProps } from "../types/dataQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const image = getImage(data.file.childrenImageSharp[0])

  return (
    <main className="p-20">
      <GatsbyImage image={image!} alt={"logo"} className="w-14 mb-10" />
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Projects</h1>
      <ul>
        {data.allMdx.nodes.map((node, idx) => (
          <Link to={`/projects/${node.frontmatter.slug}`}>
            <li
              className="text-gray-500 mb-6 mb-4 cursor-pointer hover:text-gray-900"
              key={idx}
            >
              {node.frontmatter.title} - {node.frontmatter.date}
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
      }
    }
    file(relativePath: { eq: "icon.png" }) {
      childrenImageSharp {
        gatsbyImageData
      }
    }
  }
`