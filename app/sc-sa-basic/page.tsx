import { handleBasicFormSubmit } from "@/app/actions/form";


export default function SABasic() {
    return (
        <div className="formWrapper">
            <h2>Server Action Basic</h2>

            <p className='form-description'>
                This is a Server Component.
                There is no client JS code to handle form.
                It uses Server Actions to handle the form submission.
                If there is an invalid input, server will redirect to the another page with error message.
            </p>

            <form action={handleBasicFormSubmit} autoComplete="off">
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                />
                {/* {errors.password && <p className="error">{errors.password}</p>} */}

                <div className="flex">
                    <input
                        type="checkbox"
                        name="rememberMe"
                        id="rememberMe"
                    // checked={rememberMe}
                    // onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label htmlFor="rememberMe" >Remember me!</label>
                </div>

                <button type="submit">Login</button>
            </form>
            {/* <RenderCounter count={renderCount}  /> */}
        </div>
    )
}
