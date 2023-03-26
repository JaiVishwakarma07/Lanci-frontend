import React from "react";
import "./message.scss"
import { Link } from "react-router-dom"

const Message = () => {
    return (
        <div className="Message">
            <div className="container">
                <span className="breadcrumbs">
                    <Link className="link" to="/messages">MESSAGES</Link> > JAI >
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                        <p>
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        </p>
                    </div>
                    <div className="item owner">
                        <img src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                        <p>
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        </p>
                    </div>
                    <div className="item">
                        <img src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                        <p>
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        </p>
                    </div>
                    <div className="item owner">
                        <img src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                        <p>
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        </p>
                    </div>
                    <div className="item">
                        <img src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                        <p>
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        </p>
                    </div>
                    <div className="item owner">
                        <img src="https://pixlr.com/images/index/remove-bg.webp" alt="" />
                        <p>
                            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        </p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" placeholder="write a message" id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}
export default Message