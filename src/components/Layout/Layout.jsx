import React from "react";
import {NavLink} from  "react-router-dom";

export const Layout = ({ children }) => {
    return (
        <div>
        <header className="header">
            <NavLink className="header-link" to="/">Home</NavLink>
            <NavLink className="header-link" to="/movies">Movies</NavLink>
      </header>
            <main>{ children }</main>
       </div>
    )
}