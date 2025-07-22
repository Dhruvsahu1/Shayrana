import React from "react";
import { Container, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      acive: true,
    },
    {
      name: "Login",
      slug: "/login",
      acive: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/signup",
      acive: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      acive: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      acive: authStatus,
    },
  ];

  return (
    <header className="bg-gray-800 shadow py-4">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <h1 className="text-2xl font-bold text-white">Shayrana</h1>
            </Link>
          </div>
          <ul className="flex ml-auto text-white">
            {navItems.map((item) =>
              item.acive ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 hover:text-gray-900 rounded-full"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
