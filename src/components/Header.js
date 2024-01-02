function Header({}) {
  return (
    <div className="section header">
      <a href="/">Logo</a>
      <nav className="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="" className="disable">
              Sign in
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
