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
    facingMode: "environment"
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
    this.setState({ isOpened: !this.state.isOpened });
  };

  handleChange = e => {
    this.setState({ facingMode: e.target.value });
  };

  openImageDialog = () => {
    this.qrReader.current.openImageDialog();
  }

  render() {
    return (
      <div className="grid">
        {this.state.isOpened && (
          <>
            <div className="qr">
              <QrReader
                ref={this.qrReader}
                facingMode={this.state.facingMode}
                delay={300}
                legacyMode
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex">
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
              <Button
                  color="secondary"
                  size="small"
                  variant="contained"
                  onClick={this.openImageDialog}
              >
                 Download image
              </Button>
            </div>
          </>
        )}
        {this.state.isOpened && <p className="result">{this.state.result}</p>}
        <Button
          color="primary"
          size="large"
          style={{ position: "fixed", bottom: 30 }}
          variant="contained"
          onClick={this.handleClick}
        >
          {this.state.isOpened ? "Close scanner" : "Scan"}
        </Button>
      </div>
    );
  }
}
