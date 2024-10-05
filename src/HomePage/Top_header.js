import React from "react";

export default function Top_header() {
  return (
    <div style={styles.header}>
      <div style={styles.headerContainer}>
        <p style={styles.headerText}>
          {" "}
          Summer Salw For All swim Suits And Free Express Delivery-OFF 50%!
          {"  "}
          <b>
            <u> Shopnow</u>
          </b>
        </p>
        <select style={styles.selectBox}>
          <option value="option1">English</option>
          <option value="option2">Bengali</option>
          <option value="option3">odiya</option>
        </select>
        {/* <nav style={{ backgroundColor: "black", color: "white" }}>
        <p>
          Summer Salw For All swim Suits And Free Express Delivery-OFF 50%!{" "}
          <strong>
            <u>Shopnow</u>
          </strong>
        </p>
        <select
          class="form-select"
          aria-label="Default select example"
          style={{
            textAlign: "right", padding:"5px",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <option selected>English</option>
          <option value="1">Bengali</option>
          <option value="2">odiya</option>
        </select>
      </nav>*/}
      </div>
    </div>
  );
}

const styles = {
  header: {
    height: "48px",
    width: "1440",
    backgroundColor: "black",
  },
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",

    alignItems: "center",
    padding: "20px",
    height: "24px",
    width: "859px",
    marginLeft: "445px",
    margintop: "12px",
    backgroundColor: "black",
    color: "white",
  },
  headerText: {
    margin: 0,
  },
  selectBox: {
    padding: "10px",
    border: "0px",
    fontSize: "16px",
    backgroundColor: "black",
    color: "white",
    margin: 0,
  },
};
