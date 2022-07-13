const express = require("express");
const app = express();
const cors = require("cors");
const { haversineInKM, distanceInM } = require("./modules/distance");
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/lat1=:lat1&lon1=:lon1&lat2=:lat2&lon2=:lon2", (req, res) => {
  const { lat1, lon1, lat2, lon2 } = req.params;
  const km = haversineInKM(lat1, lon1, lat2, lon2);
  const m = distanceInM(km);

  res.status(200).json({ km, m });
});

app.listen(PORT, () => {
  console.log("server started on " + PORT);
});
