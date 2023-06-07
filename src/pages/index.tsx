import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { DataProps } from "../types/dataQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/pageLayout/layout"

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  return (
    <Layout>
      <div className="section contained">
        <div className="grid grid-cols-3 gap-10">
          {data.allMdx.nodes.map((node, idx) => {
            const image = getImage(node.frontmatter.image)
            return (
              <Link
                to={`/projects/${node.frontmatter.slug}`}
                className="flex flex-col items-center justify-center"
                key={idx}
              >
                <GatsbyImage
                  image={image!}
                  alt={"project image"}
                  className="w-14 mb-8"
                />
                <p className="text-gray-500 cursor-pointer hover:text-gray-900">
                  {node.frontmatter.title} - {node.frontmatter.date}
                </p>
              </Link>
            )
          })}
        </div>
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
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`