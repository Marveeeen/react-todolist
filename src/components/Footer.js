const Footer = ({ length }) => {
  return (
    <footer>
      <p>
        {length} Todo {length === 1 ? "list" : "lists"}
      </p>
    </footer>
  );
};

export default Footer;
