import React from "react";
import {Link} from "react-router-dom";
import './mystyle.css'
export default function Login() {
    return (
        <>
        <div className="App">
            <header>
            <h2>Collabushare</h2>
            </header>
            <main>
                <h3>Login</h3>
                <p>Enter your email address and password to login.</p>
        <form>
         <table>
             <tbody>
                 <tr><td><label><b>Email Address</b></label></td></tr>
             <tr><td><input type="text" name="username" placeholder="Enter Email Address"/></td></tr>
             <tr><td><label><b>Password</b></label>(<Link to="/forgot">forgot?</Link>)</td></tr>
             <tr> <td><input type="password" name="password" placeholder="Enter Password"/></td></tr>
             <tr><td><input type="submit" value="Sign In"/></td></tr>
             </tbody>
         </table>
        </form>
            </main>
        </div>

        </>
    );
}

