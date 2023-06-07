import React, { Fragment } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { DataProps } from "../../types/dataQuery"

interface Props {
  pageTitle: string
  children: JSX.Element
}

const Layout = ({ pageTitle, children }: Props) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "icon.png" }) {
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  `)
  const image = getImage(data.file.childrenImageSharp[0])

  return (
    <Fragment>
      <nav className="header container">
        <Link to="/" className="flex items-center">
          <GatsbyImage image={image!} alt={"logo"} className="w-14 mr-2" />
          <h1 className="text-xl text-gray-700">{pageTitle}</h1>
        </Link>
        <div>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <main className="py-8 bg-slate-50">{children}</main>
    </Fragment>
  )
}

export default Layout
