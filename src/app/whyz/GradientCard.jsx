import React from "react";

const GradientCard = () => {
  return (
    <div
      className="card d-flex align-items-center text-center"
      style={{
        width: "326px",
        height: "370px",
        borderRadius: "20px",
        background: "linear-gradient(135deg, #e0e0ff, #f5f5ff)",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        padding: "20px",
      }}
    >
      {/* Icon Container */}
      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "20px",
          background: "#f0eaff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <i
          className="bi bi-search"
          style={{
            fontSize: "36px",
            color: "#6a0dad",
          }}
        ></i>
      </div>

      {/* Title */}
      <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>Research</h5>

      {/* Description */}
      <p style={{ fontSize: "14px", color: "#666" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
    </div>
  );
};

export default GradientCard;
