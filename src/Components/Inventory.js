import React, { Component } from "react";
import axios from "axios";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: null
    };
  }

  getItems = () => {
    let array = [];
    for (let i = 1; i < 37; i++) {
      array.push(axios.get(`http://www.dnd5eapi.co/api/equipment/${i}`));
    }
    axios.all(array).then(res => {
      const array = [];
      for (let i = 0; i < res.length; i++) {
        const weapon = res[i].data;
        console.log(this.state.list, "LISTOMG");
        array.push(weapon);
      }
      console.log(array);
      axios.post("/api/setInventory", array).then(res => {
        this.setState({ inventory: res.data });
      });
    });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    console.log(this.state.inventory);
    return <div></div>;
  }
}
