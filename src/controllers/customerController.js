const db = require("../config/dbConnection");

exports.createCustomer = async (req, res) => {
  const { customerName, age, tel } = req.body;
  const { rows } = await db.query(
    "INSERT INTO customer (customerName, age, tel) VALUES ($1, $2, $3)",
    [customerName, age, tel]
  );

  res.status(201).send({
    message: "Customer added successfully!",
    body: {
      customer: { customerName, age, tel }
    },
  });
};

exports.listCustomer = async (req, res) => {
    const response = await db.query('SELECT * FROM customer ORDER BY AGE ASC');
    res.status(200).send(response.rows);
  };

  exports.updateCustomerByID = async (req, res) => {
    const {customerID, customerName, age, tel } = req.body;
    const response = await db.query(
      "UPDATE customer SET customerName = $1, age = $2, tel = $3 WHERE customerid = $4",
      [customerName, age, tel, customerID]
    );
    res.status(200).send({ message: `Customer ${customerName} Updated Successfully!` });
  };

  exports.deleteCustomerById = async (req, res) => {
    const {customerID} = req.body;
    const response = await db.query(
      "Delete FROM customer WHERE customerid = $1",
      [customerID]
    );
    res.status(200).send({ message: `CustomerID ${customerID} Deleted Successfully!` });
  };