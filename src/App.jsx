import React from "react";
import { SingleName } from "./SingleName";
import { MultiNames } from "./MultiNames";

// export class App extends React.PureComponent {
//     render() {
//         const { changeUselessValue, singleName, manyNames } = this.props;
//         console.log("Render App (PureComponent)");
        
//         return (
//             <>
//                 <MultiNames names={manyNames} />

//                 <SingleName name={singleName} />
//                 <button onClick={changeUselessValue}>change state</button>
//             </>
//         );
//   }
// }

export const App = React.memo(props => {
    console.log("Render App (React.memo)");
    const { manyNames, singleName, changeUselessValue } = props;

    return (
        <>
            <MultiNames names={manyNames} />

            <SingleName name={singleName} />
            <button onClick={changeUselessValue}>change state</button>
        </>
    );
});