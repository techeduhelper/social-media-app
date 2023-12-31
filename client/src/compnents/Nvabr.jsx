import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import { useNavigate, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { Dropdown } from "flowbite-react";

const Nvabr = () => {
  const [open, setOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  // For logout user
  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <>
      <nav className=" bg-[#ffffff] top-0 fixed h-12 z-10 w-full right-0 left-0 border border-b-2">
        <div className="lg:px-8 sm:px-4 flex justify-between items-center w-full">
          <Link
            to={"/"}
            className="brand text-3xl py-2 font-bold text-gray-600"
          >
            <span className="text-blue-900 font-serif tracking-wider">
              Social
            </span>
            <span className="text-lg text-pink-600 drop-shadow-xl font-extrabold">
              App
            </span>
          </Link>
          <div className="menu-container flex text-md font-medium tracking-wide gap-3">
            <ul className="flex gap-6 sm:hidden lg:flex uppercase">
              <NavLink
                activeclassname="active"
                className="text-gray-500 hover:bg-slate-100 px-3 py-[0.7rem]  hover:text-black"
                to={"/"}
              >
                Home
              </NavLink>
              <NavLink
                activeclassname="active"
                className="text-gray-500 hover:bg-slate-100 px-3 py-[0.7rem]  hover:text-black"
                to={"/about"}
              >
                About
              </NavLink>
              <NavLink
                activeclassname="active"
                className="text-gray-500 hover:bg-slate-100 px-3 py-[0.7rem] hover:text-black"
                to={"/contact"}
              >
                contact
              </NavLink>
              {auth.user ? (
                <>
                  <div className="">
                    <Dropdown
                      label="Account"
                      style={{
                        textTransform: "uppercase",
                        backgroundColor: "#27005D",
                        outline: "none",
                        padding: "1px",
                      }}
                      className=""
                    >
                      <Dropdown.Item
                        as={Link}
                        to={"/user/dashboard"}
                        className="capitalize"
                      >
                        Dashboard
                      </Dropdown.Item>
                      <Dropdown.Item>Chat</Dropdown.Item>
                      <Dropdown.Item activeclassname="active">
                        Settings
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        as={Link}
                        to={"/login"}
                        onClick={handleLogout}
                      >
                        Sign out
                      </Dropdown.Item>
                    </Dropdown>
                  </div>
                </>
              ) : (
                <>
                  <NavLink
                    activeclassname="active"
                    className="text-gray-500 hover:bg-slate-50 px-3 py-[0.7rem] hover:text-black"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    className="text-gray-500 hover:bg-slate-100 px-3 py-[0.7rem]  hover:text-black"
                    to={"/register"}
                  >
                    Register
                  </NavLink>
                </>
              )}
            </ul>
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className="hover:bg-slate-300 rounded-full cursor-pointer lg:hidden sm:block px-2"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
              )}
            </div>
            {open && (
              <div className="bg-gray-200 absolute h-[calc(100vh-3rem)] w-full right-0 top-12 lg:hidden">
                <ul className="flex flex-col justify-center items-center gap-4 h-full text-2xl tracking-wider ">
                  <NavLink
                    activeclassname="active"
                    to={"/"}
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    to={"/about"}
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    About
                  </NavLink>
                  <NavLink
                    activeclassname="active"
                    to={"/contact"}
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    contact
                  </NavLink>
                  {!auth.user ? (
                    <>
                      <NavLink
                        activeclassname="active"
                        to={"/login"}
                        onClick={() => {
                          setOpen(!open);
                        }}
                      >
                        Login
                      </NavLink>
                      <NavLink
                        activeclassname="active"
                        to={"/register"}
                        onClick={() => {
                          setOpen(!open);
                        }}
                      >
                        Register
                      </NavLink>
                    </>
                  ) : (
                    <>
                      <NavLink
                        activeclassname="active"
                        to={"/user/dashboard"}
                        onClick={() => {
                          setOpen(!open);
                        }}
                      >
                        Dashboard
                      </NavLink>
                      <Link onClick={handleLogout}>Logout</Link>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nvabr;
