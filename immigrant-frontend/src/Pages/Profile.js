import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div>
        <h2 className="display-2">My Profile</h2>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>Jose Martinez</td>
            </tr>
            <tr>
              <th scope="row">Nationality</th>
              <td>Spanish</td>
            </tr>
            <tr>
              <th scope="row">Tenure in Country</th>
              <td>4 years</td>
            </tr>
            <tr>
              <th scope="row">Bio</th>
              <td>...</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-info"> Edit Profile </button>
      </div>
    );
  }
}

export default Profile;
