import { LockOutlined } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import photo1 from "../Assests/photo1.jpeg";
import "./UserList.css";
import { useEffect, useState } from "react";
function Userlist(props) {
  const [apidata, SetApidata] = useState([]);
  const [cardData, setCardData] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  console.log(process.env.REACT_APP_USER_DATA_API,process.env.REACT_APP_NODE_ENV);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_USER_DATA_API+props.val}`)
      .then((res) => res.json())
      .then((data) => SetApidata(data.data))
      .catch((err) => console.log(err));
  }, [props.val]);
  const handleMouseOver = (card_details) => {
    setCardData(card_details); 
    setIsHovering(true);
  };
  const user1={"email": " batz.mortmera@yahoo.com",
  "first_name": "Jana",
  "last_name": "Swassmonn",
  "avatar": `${photo1}`,
  "clicks_reviewed":1650,
  "monthly_review":6022
}
  const handleMouseOut = () => {
    setCardData({}); 
    setIsHovering(false);
  };
  return (
    <div className="container-fluid">
      <div className="row" style={{minWidth: "1080px"}}>
        <div className="col-8 table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="d-flex justify-content-start">
                  Name
                </th>
                <th scope="col border-none">Status</th>
                <th scope="col border-none">Access</th>
                <th scope="col border-none"></th>
              </tr>
            </thead>
            <tbody>
              {props.val===1?<tr>
                <td>
                  <div className="row">
                    <div className="col-3">
                      <img className="imgs" src={photo1} onMouseOver={() => handleMouseOver(user1)}
                            onMouseOut={handleMouseOut} alt="" />
                    </div>
                    <div
                      className="col"
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <div className="row user-name">Jana Swassmonn</div>
                      <div className="row user-mail">
                        batz.mortmera@yahoo.com
                      </div>
                    </div>
                  </div>
                </td>
                <td style={{ fontWeight: "600", color: "#60e460" }}>Active</td>
                <td>Owner</td>
                <td>
                  <LockOutlined />
                </td>
              </tr>:null}
              {apidata.map((val,ind) => {
                return (
                  <tr key={ind}>
                    <td>
                      <div className="row">
                        <div className="col-3">
                          <img
                            className="imgs"
                            src={val.avatar}
                            onMouseOver={() => handleMouseOver(val)}
                            onMouseOut={handleMouseOut}
                            alt=""
                          />
                        </div>
                        <div
                          className="col"
                          style={{
                            overflow: "hidden",
                          }}
                        >
                          <div className="row user-name">
                            {val.first_name} {val.last_name}
                          </div>
                          <div className="row user-mail">{val.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <select>
                        <option value="Inactive">Inactive</option>
                        <option value="Active">Active</option>
                      </select>
                    </td>
                    <td>
                      <select>
                        <option value="Manager">Manager</option>
                        <option value="rigatoni">Read</option>
                      </select>
                    </td>
                    <td>
                      <DeleteIcon />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        { isHovering?<div className="col-4 d-flex align-items-center">
          <div className="card-container">
            <img className="round" src={cardData.avatar} alt="user" />
            <h4 style={{ fontWeight: "900" }}>
              {cardData.first_name} {cardData.last_name}
              <span style={{ fontSize: "41px", color: "#60e460" }}>
                <sup>.</sup>
              </span>
            </h4>
            <p style={{ fontWeight: "600" }}>{cardData.email}</p>
            <h5
              className="mb-3"
              style={{ fontSize: "18px", fontWeight: "900" }}
            >
              Your Plan: Standard
            </h5>
            <div className="buttons">
              <button
                className="primary w-75"
                style={{ color: "white", fontWeight: "600" }}
              >
                Active User
              </button>
            </div>
            <div className="col mt-3 mx-3">
              <div className="row">
                <strong>Plan Uses</strong>
              </div>
              <div className="row main mt-1">
                <div className="skill uses"></div>
              </div>
            </div>
            <div className="row mb-3 mt-3">
              <div className="col" style={{ borderRight: "3px solid grey" }}>
                <div
                  className="row"
                  style={{
                    fontWeight: "700",
                    fontSize: "30px",
                    marginLeft: "21px",
                  }}
                >
                  2450
                </div>
                <div
                  className="row"
                  style={{ marginLeft: "21px", fontSize: "80%" }}
                >
                  clicks reviewed
                </div>
              </div>
              <div className="col">
                <div
                  className="row"
                  style={{
                    fontWeight: "700",
                    fontSize: "30px",
                    marginLeft: "10px",
                  }}
                >
                  5000
                </div>
                <div
                  className="row"
                  style={{ marginLeft: "10px", fontSize: "80%" }}
                >
                  Monthly clicks
                </div>
              </div>
            </div>
          </div>
        </div>:null}
      </div>
    </div>
  );
}

export default Userlist;
