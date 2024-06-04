import React from "react";
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import "../components/layout.css"
import TandemButton from "../components/button/button";


function archivosqr(){
  return(
<Layout>
 
  <div className="qrarchivo">
  <h2>ARCHIVO QR</h2>
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={120}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={120}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  <StaticImage
    src="../images/qr-code.png"
    loading="eager"
    width={120}
    quality={95}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
    />
  <br></br>
  <TandemButton enlace="#" >Acceder</TandemButton>
  </div>
</Layout>
  )
}
export default archivosqr