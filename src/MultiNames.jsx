import React from "react";

// export class MultiNames extends React.PureComponent {
//   render() {
//     console.log("Render MultiNames (PureComponent)");
//     return (
//       <div>
//         {this.props.names &&
//           !!this.props.names.length &&
//           this.props.names.map(name => <div key={name}>{name}</div>)}
//       </div>
//     );
//   }
// }

export const MultiNames = React.memo(props => {

    console.log("Render MultiNames (React.memo)");
    return (
      <div>
        {props.names &&
          !!props.names.length &&
          props.names.map(name => <div key={name}>{name}</div>)
        }
      </div>
    );
});