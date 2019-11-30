import React from "react";
import { App } from "./App.jsx";

export class Parent extends React.Component {
    constructor(props){
        super(props);
        console.log("=== Первичное монтирование начато ===");
    }

    componentDidMount() {
        
        console.log("=== Первичное монтирование завершено ===");
    }

    state = {
        singleName: "Одинокий Джо",
        manyNames: ["Игорь", "Илья"],
        uselessValue: 1
    };

  changeUselessValue = () => {
        console.log("=== Вызываем Render у Parent (обновили state) ===")
        this.setState({ uselessValue: Math.random() });
  };

  render() {
    const { singleName, manyNames, uselessValue } = this.state;
    console.log("Render Parent (Component)");
    return (
        <div>
            <App
                singleName={singleName}
                manyNames={manyNames}
                // uselessValue={uselessValue}
                changeUselessValue={this.changeUselessValue}
            />
      </div>
    );
  }
}