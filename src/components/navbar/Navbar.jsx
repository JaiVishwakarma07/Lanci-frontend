import React, { useEffect, useState } from "react";
import "./navbar.scss"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation()

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "Jai",
        isSeller: true,
    }

    return (
        <div className={active || pathname !== "/" ? "Navbar active" : "Navbar"}>
            <div className="container">
                <div className="logo">
                    <Link to="/" className="link">
                        <span className="text">Lanci</span>
                    </Link>
                    <span className="dot">.</span>
                </div>
                <div className="links">
                    <span>Lanci Bussiness</span>
                    <span>Explore</span>
                    <span>English</span>
                    <span>Sign In</span>
                    {!currentUser?.isSeller && <span>Become a seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser &&
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {
                                    currentUser?.isSeller && (
                                        <>
                                            <Link className="link" to="/mygigs">Gigs</Link>
                                            <Link className="link" to="/add">Add New Gig</Link>
                                        </>
                                    )
                                }
                                <Link className="link" to="/orders">Orders</Link>
                                <Link className="link" to="/messages">Messages</Link>
                                <Link className="link" to="/">Logout</Link>
                            </div>}
                        </div>
                    }
                </div>
            </div>
            {(active || pathname !== "/") && <> <hr />
                <div className="menu">
                    <Link className="link" to="/">Graphics & Design</Link>
                    <Link className="link" to="/">Video & Animation</Link>
                    <Link className="link" to="/">Writing & Translation</Link>
                    <Link className="link" to="/">AI Services</Link>
                    <Link className="link" to="/">Digital Marketing</Link>
                    <Link className="link" to="/">Music & Audio</Link>
                    <Link className="link" to="/">Programming & Tech</Link>
                    <Link className="link" to="/">Bussiness</Link>
                    <Link className="link" to="/">Lifestyle</Link>
                </div>
                <hr />
            </>}
        </div>
    )
}
export default Navbar