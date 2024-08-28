import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "../assets/data";
import { Children } from "react";

export const Footer = () => {
  return (
    <footer>
      <div>
      <div>
        <Link to="/" className="mb-10 bold -20">
          Shoppee
        </Link>
        <div>
          {FOOTER_LINKS.map((col) => (
            <FooterColumn title={col.title}  key={col.title} >
              <ul>
                {col.links.map((link))}
              </ul>
            </FooterColumn>
          ))}
        </div>
      </div>
      </div>
    </footer>
  );
};

const FooterColumn=({title,Children})=>{
  return(
    <div>
      <h4>{title}</h4>
      {Children}
    </div>
  );
}
export default Footer;
