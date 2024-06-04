import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import { StaticImage } from "gatsby-plugin-image"
import Footer from "./footer"

import "./layout.css"
import archivosqr from "../archivosqr"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        
      </div>
      <Footer></Footer>
    </>
  )
}

export default Layout







