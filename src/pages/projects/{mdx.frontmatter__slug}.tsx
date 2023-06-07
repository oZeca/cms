import * as React from "react"
import { graphql } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import { DataProps } from "../../types/dataQuery"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/pageLayout/layout"

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  // @ts-ignore
  const image = getImage(data.mdx.frontmatter.image)

  return (
    <Layout pageTitle="Home Page">
      <div className="container">
        <GatsbyImage image={image!} alt={"logo"} className="w-14 mb-10" />
        <h1 className="text-3xl font-bold text-gray-700 mb-6">
          {/* @ts-ignore */}
          {data.mdx.frontmatter.title}
        </h1>
        {/* @ts-ignore */}
        <p className="text-gray-500">{data.mdx.frontmatter.date}</p>
      </div>
    </Layout>
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
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
