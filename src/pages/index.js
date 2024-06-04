import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import TandemButton from "../components/button/button"
import archivosqr from "./archivosqr"

const links = [
  
]

const samplePageLinks = [
 
]

const moreLinks = [
  
  {
    text: "Aviso legal",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Accesibilidad",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Politica de cookies",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Política de privacidad",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className="layoue">
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/logotipo.png"
        loading="eager"
        width={100}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Generador <b>QR</b>
      </h1>
      <p className={styles.intro}>
        <b></b>{" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        
      </p>
    </div>
    <div className="botones">
    
    <TandemButton enlace="inicio" >Acceso a empleados</TandemButton>
    <br></br>
    <TandemButton enlace="Info" >Información institucional</TandemButton>
  </div>
  </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage