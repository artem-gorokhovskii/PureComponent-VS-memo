import React from "react";
import { connect } from "react-redux";
import { SingleName } from "./SingleName";
import { MultiNames } from "./MultiNames";

class AppComponent extends React.Component {
    render() {
        const { changeUselessValue, singleName, manyNames } = this.props;
        console.log("Render App (Component)");
        
        return (
            <>
                <MultiNames names={manyNames} />

                <SingleName name={singleName} />
                <button onClick={changeUselessValue}>change state</button>
            </>
        );
  }
}

// export const App = connect()(AppComponent);
export const App = AppComponent;

// export const App = connect()(props => {
//     console.log("Render App (connect(Functional Component))");
//     const { manyNames, singleName, changeUselessValue } = props;

//     return (
//         <>
//             <MultiNames names={manyNames} />

//             <SingleName name={singleName} />
//             <button onClick={changeUselessValue}>change state</button>
//         </>
//     );
// });