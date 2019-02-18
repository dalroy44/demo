import React, { Component } from "react";
import PropTypes from "prop-types";

class ExampleButton extends Component {
  constructor() {
    super();

    this.state = { isLiked: false };

    this.toggleLike = this.toggleLike.bind(this);
  }

  toggleLike() {
    this.setState({ isLiked: !this.state.isLiked });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleLike}>
          {this.state.isLiked ? "Un-Like" : "Like"}
        </button>
      </div>
    );
  }
}

ExampleButton.propTypes = {};

export default ExampleButton;
