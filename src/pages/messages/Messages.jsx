import React from "react";
import "./messages.scss"
import { Link } from "react-router-dom"

const Messages = () => {

    const currentUser = {
        id: 1,
        username: "Jai",
        isSeller: true,
    };

    const message = `Hi this is Jai. This is a Message`;

    return (
        <div className="Messages">
            <div className="container">
                <div className="title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <tr>
                        <th>Buyer</th>
                        <th>Last Message</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    <tr className="active">
                        <td>Jai</td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 Day ago</td>
                        <td>
                            <button>Mark as Read</button>
                        </td>
                    </tr>
                    <tr className="active">
                        <td>Jai</td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 Day ago</td>
                        <td>
                            <button>Mark as Read</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jai</td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 Day ago</td>
                    </tr>
                    <tr>
                        <td>Jai</td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 Day ago</td>
                    </tr>
                    <tr>
                        <td>Jai</td>
                        <td><Link to="/message/123" className="link">{message.substring(0, 100)}...</Link></td>
                        <td>1 Day ago</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Messages