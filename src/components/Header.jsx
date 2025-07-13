const Header = () => {
  return (
    <header className="font-medium text-[#6b645c] text-lg absolute top-0 z-40 w-full">
      <nav className=" mt-8 px-6 flex justify-between ">
        <div>MERN STACK DEVELOPER</div>
        <ul className=" flex flex-col md:flex-row justify-evenly gap-3">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
