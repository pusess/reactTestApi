import React from "react";

import './LikeButton.css';

export default class LikeButton extends React.Component {

    state = {
        likes: 0
    };

    addLike = () => {
        let newCount = this.state.likes + 1;
        this.setState({
            likes: newCount
        });
    };
    a

    render() {
        return ( 
            <div className="like">
                <div> 
                    Likes: {this.state.likes} 
                </div>
                <i className="fa fa-thumbs-up" aria-hidden="true" onClick={this.addLike}></i>
            </div> 
        )
    }

}