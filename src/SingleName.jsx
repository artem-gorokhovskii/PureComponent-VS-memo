import React from "react";

// export class SingleName extends React.PureComponent {
//   render() {
//     console.log("Render SingleName (PureComponent)");
//     return <div>{this.props.name}</div>;
//   }
// }



export const SingleName = React.memo(props => {

    console.log("Render SingleName (React.memo)");
    return (
        <div>{props.name}</div>
    );
});