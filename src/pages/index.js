import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import TandemButton from "../components/button/button"



const IndexPage = () => (
  <Layout>
    <div className="layoue">
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/logotipo.png"
        loading="eager"
        width={200}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        GENERADOR QR
      </h1>
      
    </div>
    <div className="botones">
    <TandemButton enlace="/iniciosesion" >ACCESO EMPLEADOS</TandemButton>
    
    <br></br>
<TandemButton enlace="/Info" >INFORMACIÓN INSTITUCIONAL</TandemButton>
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