import { Button } from "antd";
import { InstagramOutlined } from "@ant-design/icons";

const Pagination = (props) => (
  <div
    style={{
      position: "absolute",
      left: 16,
      bottom: 64,
      padding: 4,
      color: "white",
    }}
  >
    {props.pageNumber && (
      <>
        <text
          style={{
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          {props.pageNumber}
        </text>
        <text style={{ opacity: 0.5 }}>/</text>

        <text
          style={{
            fontSize: "14px",
            position: "relative",
            top: 1,
            opacity: 0.5,
          }}
        >
          {props.groupNumber}
        </text>
      </>
    )}
  </div>
);

export default Pagination;
