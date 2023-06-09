import React, { Fragment } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { DataProps } from "../../types/dataQuery"

interface Props {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
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
      <nav className="header contained">
        <Link to="/" className="flex items-center">
          <GatsbyImage image={image!} alt={"logo"} className="w-14 mr-2" />
          <h1 className="text-xl text-gray-700">Projects</h1>
        </Link>
        <div>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="contained pb-20">
        <div className="flex justify-between">
          <div>
            <p className="text-gray-300">923425839</p>
            <p className="text-gray-300">projects@mail.com</p>
          </div>
          <div>
            <p className="text-gray-300">@linkedin</p>
            <p className="text-gray-300">@instagram</p>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Layout
