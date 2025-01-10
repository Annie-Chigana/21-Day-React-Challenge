import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({ name: "", email: ""});
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            setErrors({ message: "All fields are required!"});
        } else {
            setErrors({});
            console.log("Form submitted:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={formData.name}
                onchange={handleInputChange}
                placeholder="name"
            />
            <input 
                name="email"
            />
        </form>
    )
}