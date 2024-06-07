import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <a href="/">
    <StaticImage
  src="../images/logotipo.png"
  loading="eager"
  width={80}
  quality={100}
  formats={["auto", "webp", "avif"]}
  alt=""
  style={{ marginBottom: `var(--space-3)` }}
/>
</a>
    
    
  </header>
)

export default Header
