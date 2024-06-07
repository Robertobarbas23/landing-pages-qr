import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
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
    <a href="/Info">Patrimonio Nacional</a>

   

<Link to="/avisolegal"><a>Aviso Legal</a></Link>
<Link to="/accesibilidad"><a>Accesibilidad</a></Link>
<Link to="/politicaprivacidad"><a>Política de Privacidad</a></Link>
<Link to="/politicacookis"><a>Política de cookies</a></Link>
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