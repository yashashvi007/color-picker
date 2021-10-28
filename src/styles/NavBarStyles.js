export default {
    navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
      },
      brand: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
          textDecoration: "none",
          color: "black",
        },
       
      },
      slider: {
        width: "340px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track": {
          backgroundColor: "transparent",
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
          backgroundColor: "green",
          border: "2px solid green",
          boxShadow: "none",
          outline: "none",
          width: "13px",
          height: "13px",
          marginTop: "-3px",
        },
        "& .rc-slider-rail": {
          height: "8px",
        }
      },
      selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
      }
}