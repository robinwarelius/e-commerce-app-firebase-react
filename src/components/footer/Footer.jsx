import stylesFooter from "./stylesFooter.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footerDiv">
        <p>Copyright ⓒ {year}</p>
      </div>
    </>
  );
};

export default Footer;
