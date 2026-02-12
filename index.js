import express from 'express';


const app = express();



app.get("/", (req, res) => {
  res.send("CI/CD Node App Running 🚀");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
    console.log("This is newwer version after deployment with CI/CD pipeline");
    console.log(`http://localhost:3000`);
});

