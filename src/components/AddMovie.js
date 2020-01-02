import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovie } from "../actions/action";
import { Modal, Button } from "antd";

class AddMovie extends Component {
  state = {
    title: "",
    rate: 0,
    img: "",
    year: "",
    desc: "",
    confirmLoading: false,
    visible: false
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  showModal = () => {
    
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.props.addMovie({ id: Math.random(), ...this.state });
  
    this.setState({
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };
 


  render() {
    return (
      <div>
        <Button className="new-movie-card" onClick={this.showModal}>
          +
        </Button>
        <Modal
          title="Add New Movie"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
        >
          <div className="new-movie-title">
            <label for="title">Movie Title</label>
            <input
              type="text"
              name="title"
              placeholder="Type Movie Title..."
              className="new-movie-title-input"
              id="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="new-movie-url">
            <label for="image">Movie Image</label>
            <input
              type="text"
              name="img"
              placeholder="Type/Copy URL Please..."
              className="new-movie-url-input"
              id="image"
              onChange={this.handleChange}
            />
          </div>
          <div className="new-movie-year">
            <label for="year">Movie Year</label>
            <input
              type="text"
              name="year"
              placeholder="Type The Movie Date...."
              className="new-movie-year-input"
              id="year"
              onChange={this.handleChange}
            />
          </div>
          <div className="new-movie-rating">
            <label for="rate">Movie Rating</label>
            <input
              type="number"
              name="rate"
              className="new-movie-rating-input"
              placeholder="How Many Stars...?"
              id="rate"
              onChange={this.handleChange}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMovie: payload => {
      dispatch(addMovie(payload))
    }
  }
}
export default
 connect(null, mapDispatchToProps)
 (AddMovie)
