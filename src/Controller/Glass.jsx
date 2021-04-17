import React, { Component } from "react";

export default class Glass extends Component {
  state = {
    glassImg: "./glassesImage/v2.png",
    btnGlasses: [
      {
        name: "v1",
        imgSrc: "./glassesImage/v1.png",
      },
      {
        name: "v2",
        imgSrc: "./glassesImage/v2.png",
      },
      {
        name: "v3",
        imgSrc: "./glassesImage/v3.png",
      },
      {
        name: "v4",
        imgSrc: "./glassesImage/v4.png",
      },
      {
        name: "v5",
        imgSrc: "./glassesImage/v5.png",
      },
      {
        name: "v6",
        imgSrc: "./glassesImage/v6.png",
      },
      {
        name: "v7",
        imgSrc: "./glassesImage/v7.png",
      },
      {
        name: "v8",
        imgSrc: "./glassesImage/v8.png",
      },
      {
        name: "v9",
        imgSrc: "./glassesImage/v9.png",
      },
    ],
  };

  handleChoiceGlass = (glass) => {
    this.setState({
      glassImg: `./glassesImage/${glass}.png`,
    });
  };
  render() {
    return (
      <div>
        <section className="glasses-app bg-dark" style={{ height: "100vh" }}>
          <h2 className="text-center h2 text-white py-1">Glasses App</h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="container row">
              <section className="model d-flex justify-content-center col-5">
                <div
                  className="card text-left"
                  style={{ width: 300, position: "relative" }}
                >
                  <img
                    className="card-img-top"
                    src="./glassesImage/model.jpg"
                    alt="hinh model"
                  />
                  <img
                    src={this.state.glassImg}
                    alt="kinh"
                    style={{
                      width: 170,
                      position: "absolute",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "16%",
                    }}
                  />
                  <div className="card-body">
                    <span className="card-title badge-danger h3 px-2 rounded">
                      $50
                    </span>
                    <p className="card-text mt-2">GUCCI G8759H</p>
                  </div>
                </div>
              </section>
              <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v1")}
                  >
                    <img
                      src="./glassesImage/v1.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v2")}
                  >
                    <img
                      onClick={() => this.props.re}
                      src="./glassesImage/v2.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v3")}
                  >
                    <img
                      onClick={() => this.props.re}
                      src="./glassesImage/v3.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v4")}
                  >
                    <img
                      onClick={() => this.props.re}
                      src="./glassesImage/v4.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v5")}
                  >
                    <img
                      onClick={() => this.props.re}
                      src="./glassesImage/v5.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v6")}
                  >
                    <img
                      onClick={() => this.props.re}
                      src="./glassesImage/v6.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v7")}
                  >
                    <img
                      onClick={() => this.props.re}
                      src="./glassesImage/v7.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v8")}
                  >
                    <img
                      onClick={() => this.props.re}
                      src="./glassesImage/v8.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.handleChoiceGlass("v9")}
                  >
                    <img
                      onClick={() => this.props.re}
                      src="./glassesImage/v9.png"
                      alt="hinh"
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
        ;
      </div>
    );
  }
}
