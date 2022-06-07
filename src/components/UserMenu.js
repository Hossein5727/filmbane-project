import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

function UserMenu({ setIsOpenUserMenu, logOut }) {
  const userRef = useRef();
  const userData = useSelector((state) => state.user.information);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setIsOpenUserMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  console.log(userData);

  return (
    <div className="w-[100vw] h-[100vh] bgUserMenu flex justify-start items-start px-6 py-28 z-[5] inset-0">
      <div
        ref={userRef}
        className="bg-citrine px-5 py-4 rounded-md animate__animated animate__zoomIn flex flex-col gap-6 w-80"
      >
        <div className="flex justify-start items-start border-b border-opacity-50 border-rich-black-fogra-29 rounded-sm pb-2 gap-2 text-2xl  text-black">
          <FaUserCircle className="text-3xl" />
          <div className="flex flex-col gap-2">
            <p>
              {userData.name} {userData.family}
            </p>
            <p className="text-[15px]">{userData.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-rich-black-fogra-39">
          <FaUserEdit className="text-2xl" />
          <Link
            onClick={() => setIsOpenUserMenu(false)}
            to="/edituser"
            className="text-xl"
          >
            Edit User
          </Link>
        </div>

        <div
          className="flex items-center gap-2 text-rich-black-fogra-39 cursor-pointer"
          onClick={logOut}
        >
          <IoMdLogOut className="text-2xl" />
          <p className="text-xl">Log out</p>
        </div>
      </div>
    </div>
  );
}

export default UserMenu;
