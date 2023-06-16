const ModalComponent = ({ open, handleClose }) => {
  if (!open) {
    return null;
  }
  return (
    <div
      style={{
        width: 500,
        height: 500,
        boxShadow: "1px 1px 10px 5px #888888",
        margin: "20px auto"
      }}
    >
      <div>
        <h1 style={{ display: "inline-block" }}>Dialog Box</h1>
        <h1
          onClick={handleClose}
          style={{ float: "right", paddingRight: 16, cursor: "pointer" }}
        >
          X
        </h1>
      </div>
    </div>
  );
};

export default ModalComponent;
