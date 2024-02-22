import React, { useContext, useState } from "react";
import { loginUser, registerUser } from "../api/Api";
import { UserContext } from "../context/UserContext";


const LoginModal = ({ onClose }) => {
  const { setUser, loginContext} = useContext(UserContext)
  const [input, setInput] = useState({
    name : "",
    email : "",
    password : ""
  });

  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleInput = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput((input) => ({ ...input, [name]: value }));
  };

  const handleToggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let promise;
    if (isLoginMode) {
        promise = loginUser(input)
            .then(result => {
                const user = result.user;
                const token = result.token;
                const currentUser = { name: user.name, email: user.email, token };                
                loginContext(currentUser)
                onClose()
            })
            .catch(error => {
                if (error.response && error.response.data && error.response.data.error === "invalid_credentials") {
                    alert("Invalid email or password. Please try again.");
                } else {
                    alert(error.message);
                }
            });
    } else {
        promise = registerUser(input)
            .then(result => {
                const user = result.user;
                const token = result.token;
                const currentUser = { name: user.name, email: user.email, token };
                setUser(currentUser);
                localStorage.setItem("user", JSON.stringify(currentUser));
                console.log('Registration successful:', result);
                onClose();
            })
            .catch(error => {
                alert("Registration failed. Please try again.");
                console.error('Registration failed:', error);
            });
    }


    promise.finally(() => {
        setInput({
            name: "",
            email: "",
            password: ""
        });
    });
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg p-6 w-96 max-w-full shadow-lg">
        <h1>{isLoginMode ? "Login" : "Register"}</h1>
        <form className="flex flex-col [&>label]:mb-1 [&>input]:mb-3">
            {!isLoginMode && (
            <>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={handleInput}
                value={input.name}
              />
            </>
            )}
            <label>Email</label>
            <input
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={handleInput}
                value={input.email}
            />

            <label>Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={handleInput}
                value={input.password}
            />
        </form>
        <div>
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSubmit}>{isLoginMode ? "Login" : "Register"}</button>
          <button onClick={handleToggleMode}>{isLoginMode ? "Switch to Register" : "Switch to Login"}</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
