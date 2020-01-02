import React, { Component } from "react";
import { connect } from "react-redux";
import { editMovie } from "../actions/action";
import { Modal, Button } from "antd";

class EditMovie extends Component {
  state = {
    title: this.props.movie ? this.props.movie.title : "",
    rate: this.props.movie ? this.props.movie.rate : "",
    img: this.props.movie ? this.props.movie.img : "",
    year: this.props.movie ? this.props.movie.year : "",
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
    this.props.editMovie(this.state, this.props.movie.id);

    this.setState({
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 0);
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    return (
      <div>
        <Button className="btn-icon" onClick={this.showModal}>
          <img
            className="edit-icon"
            alt="edit"
            src="https://icon2.cleanpng.com/20180920/eqx/kisspng-computer-icons-editing-portable-network-graphics-i-edit-profile-svg-png-icon-free-download-194863-5ba3457963b929.9651381015374268094085.jpg"
          />
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
              value={this.state.title}
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
              value={this.state.img}
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
              value={this.state.year}
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
              value={this.state.rate}
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

// const mapDispatchToProps = dispatch => {
//   return {
//     editMovie: (id, payload) => {
//       dispatch(editMovie(id, payload));
//     }
//   };
// };
export default connect(null, { editMovie })(EditMovie);
