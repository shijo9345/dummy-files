import PropsTypes from "prop-types"
import React from "react";
const Details=(props)=>{
    return(
        <div className="students">
            <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>Roll No.</th>
                    <td>{props.no}</td>
                </tr>
                <tr>
                    <th>Pass or Fail</th>
                    <td>{props.passorfail? "Yes":"No"}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Details
Details.prototype={
    name: PropsTypes.string,
    no: PropsTypes.number,
    passorfail: PropsTypes.bool
}
Details.defaultProps={
    name:"No Name",
    no:0,
    passorfail:false,
}