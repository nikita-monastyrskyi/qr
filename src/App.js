import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Button from "@material-ui/core/Button";
import "./App.css";
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import Select from "@material-ui/core/es/Select/Select";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";

export default class App extends Component {
  state = {
    result: "No result",
    isOpened: true,
    facingMode: "environment",
    legacyMode: false
  };

  qrReader = React.createRef();

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };

  handleError = err => {
    console.error(err);
  };

  handleClick = () => {
    this.setState({ legacyMode: !this.state.legacyMode });
  };

  handleChange = e => {
    this.setState({ facingMode: e.target.value });
  };

  handleImageLoad = () => {
    // this.setState({ legacyMode: false });
  };

  openImageDialog = () => {
    this.qrReader.current.openImageDialog();
  };

  render() {
    return (
      <div className="grid">
        <div className="qr">
          <QrReader
            ref={this.qrReader}
            facingMode={this.state.facingMode}
            delay={300}
            onError={this.handleError}
            onScan={this.handleScan}
            onImageLoad={this.handleImageLoad}
            legacyMode={this.state.legacyMode}
            style={{ width: "100%" }}
          />
        </div>
        <div className="flex">
          {!this.state.legacyMode && (
            <FormControl
              style={{ marginTop: 10, marginBottom: 20, display: "block" }}
            >
              <Select
                value={this.state.facingMode}
                style={{ width: 180 }}
                onChange={this.handleChange}
                inputProps={{
                  name: "age",
                  id: "age-simple"
                }}
              >
                <MenuItem value={"environment"}>Rear camera</MenuItem>
                <MenuItem value={"user"}>Front-facing camera</MenuItem>
              </Select>
            </FormControl>
          )}
          {this.state.legacyMode && (
            <Button
              color="secondary"
              size="medium"
              style={{marginTop: 10}}
              variant="contained"
              onClick={this.openImageDialog}
            >
              Download image
            </Button>
          )}
        </div>

        {this.state.isOpened && <p className="result">{this.state.result}</p>}
        <Button
          color="primary"
          size="large"
          style={{ position: "fixed", bottom: 30 }}
          variant="contained"
          onClick={this.handleClick}
        >
          Open {this.state.legacyMode ? "Inline mode" : "Download mode"}
        </Button>
      </div>
    );
  }
}
