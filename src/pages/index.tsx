import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { DataProps } from "../types/dataQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/pageLayout/layout"

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout pageTitle="Home Page">
      <div className="container">
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
      </div>
    </Layout>
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
  }
`