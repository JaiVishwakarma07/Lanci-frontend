import React from "react";
import "./orders.scss"


const Orders = () => {

    const currentUser = {
        id: 1,
        username: "Jai",
        isSeller: true,
    };

    return (
        <div className="Orders">
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td><img className="img" src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td><img className="message" src="/img/message.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td><img className="img" src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td><img className="message" src="/img/message.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td><img className="img" src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td><img className="message" src="/img/message.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td><img className="img" src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td><img className="message" src="/img/message.png" alt="" /></td>
                    </tr>
                    <tr>
                        <td><img className="img" src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt="" /></td>
                        <td>Gig1</td>
                        <td>88</td>
                        <td>123</td>
                        <td><img className="message" src="/img/message.png" alt="" /></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Orders