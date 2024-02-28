import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { changePassUser } from "../api/Api";

const ChangePassModal = ({onClose}) => {
    const { user } = useContext(UserContext)
    const [input, setInput] = useState({
        current_password: "",
        new_password: "",
        new_confirm_password: ""
    })

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    
    const handleInput = (e) => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      };

    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await changePassUser(input, user.token);
        // Assuming the API returns a success message
        setSuccess(true);
        onClose(); // Close the modal
        // Optionally, update user context with new user data
    } catch (error) {
        setError("Failed to change password. Please try again.");
    }
    };

    
    return(
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
        <div className="bg-white rounded-lg p-6 w-96 max-w-full shadow-lg">
            <h1>Change Password</h1>
            {success && <p>Password changed successfully!</p>}
            {error && <p className="text-red-500">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Current Password</label>
                <input
                    type="password"
                    name="current_password"
                    value={input.current_password}
                    onChange={handleInput}
                />

                <label>New Password</label>
                <input
                    type="password"
                    name="new_password"
                    value={input.new_password}
                    onChange={handleInput}
                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    name="new_confirm_password"
                    value={input.new_confirm_password}
                    onChange={handleInput}
                />
                <button type="submit">Submit</button>
                <button onClick={onClose}>Cancel</button>
            </form>
        </div>
        </div>
    )
}

export default ChangePassModal