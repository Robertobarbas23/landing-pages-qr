import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"




const Footer = () => {
  return (
    <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    © {new Date().getFullYear()} &middot; 
    {` `}
    <a href="https://www.patrimonionacional.es/">Patrimonio Nacional</a>

   

<a className='a' href="#">Aviso Legal</a>
<a className='a' href="#">Accesibilidad</a>
<a className='a' href="#">Política de Privacidad</a>
<a className='a' href="#">Política de cookies</a>
<div className='footerfoto'>
<StaticImage
  src="../images/logotipo.png"
  loading="eager"
  width={60}
  quality={80}
  formats={["auto", "webp", "avif"]}
  alt=""
  style={{ marginBottom: `var(--space-3)` }}
/>
<StaticImage
  src="../images/logo-tandem.png"
  loading="eager"
  width={100}
  quality={95}
  formats={["auto", "webp", "avif"]}
  alt=""
  style={{ marginBottom: `var(--space-3)` }}
/>
</div>



  </footer>
  );
};

export default Footer;