import React , { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { UserContext } from "../context/UserContext";


const NavBar = () => {
  const { user, logoutContext } = useContext(UserContext)
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false)
  const [userDropdownVisible, setUserDropdownVisible] = useState(false)
  const [settingsDropdownVisible, setSettingsDropdownVisible] = useState(false)

  const handleHomeClick = () => {
    navigate('/');
  }
  const handleMoviesClick = () => {
    navigate('/movieslist');
  }
  const handleGamesClick = () => {
    navigate('/gameslist')
  }

  const handleMasterMoviesClick = () => {
    navigate('/mastermovies');
  }

  const handleMasterGamesClick = () => {
    navigate('/mastergames')
  }

  const handleCloseModal = () => setShowModal(false);
  
  const handleShowModal = () => setShowModal(true);

  const toggleUserDropdown = () => {
    setUserDropdownVisible(!userDropdownVisible)
    setSettingsDropdownVisible(false)
  }
  
  const toggleSettingsDropdown = () => {
    setSettingsDropdownVisible(!settingsDropdownVisible)
    setUserDropdownVisible(false)
  }

    return (
        <nav className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02 z-40">
          <div className="nav font-semibold text-lg">
            <div className="flex items-center">
              <button onClick={handleHomeClick} className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">Home</button>
              <button onClick={handleMoviesClick} className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">Movies List</button>
              <button onClick={handleGamesClick} className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active">Games List</button>
            </div>
          </div>
          
          <div className="flex justify-end font-semibold text-lg">

            {user ? (
              <div className="relative">
                <button 
                  className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active"
                  onClick={toggleSettingsDropdown}
                >Settings</button>
                {settingsDropdownVisible && (
                <div
                  className="absolute end-0 z-10 mt-2 w-auto rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
                    <button
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                      onClick={handleMasterMoviesClick}
                    >
                      Movies Settings
                    </button>

                    <button
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                      onClick={handleMasterGamesClick}
                    >
                      Games Settings
                    </button>
                  </div>
                </div>
                )}
                
                <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
                  <a
                    href="#"
                    className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <div>Welcome, {user.name}!</div>
                  </a>
              
                <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700"
                        onClick={toggleUserDropdown}
                  >
                    <span className="sr-only">Menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                {userDropdownVisible && (
                  <div
                  className="absolute end-0 z-10 mt-2 w-auto divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                  role="menu"
                >
                  <div className="p-2">
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Edit
                    </a>
              
            
                  </div>
                  <div className="p-2">
                      <button
                        type="submit"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        role="menuitem"
                        onClick={logoutContext}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Logout
                      </button>
                  </div>
                </div>
                )}
              </div>
            ) : (
              <div className="relative">
                <button
                  className="p-4 border-b-2 border-zinc-900 border-opacity-0 hover:border-opacity-100 hover:text-zinc-900 duration-200 cursor-pointer active"
                  onClick={handleShowModal}
                >
                  Login
                </button>
              </div>
            )}
          </div>

          {showModal && <LoginModal  onClose={handleCloseModal} />}

        </nav>
      );
}

export default NavBar;