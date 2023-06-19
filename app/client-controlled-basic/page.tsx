'use client'

import { useEffect, useState } from "react";
import RenderCounter from "../components/render-counter";

let renderCount = 0;

const ControlledLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState<Errors>({});


    const validateForm = () => {
        const errors: Errors = {};

        if (!email) {
            errors.email = "Email is required.";
        }

        if (!password) {
            errors.password = "Password is required.";
        }

        return errors;
    };

    const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({});

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        const formData = {
            email,
            password,
            rememberMe,
        };

        // Post request here.
    };

    useEffect(() => {
        return () => {
            renderCount = 0;
        };
    }, []);


    renderCount += 1;


    return (
        <div className="formWrapper">
            <h2>Controlled Form</h2>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}

                <div className="flex">
                    <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe" >Remember me!</label>
                </div>

                <button type="submit">Login</button>
            </form>
            <RenderCounter count={renderCount} />
        </div>
    );
};

export default ControlledLoginForm;


interface Errors {
    email?: string;
    password?: string;
}