// const express = require('express');
// const app = express();
 
// const port = process.env.PORT || 80;
 
// app.get('/', (req, res) => {
//   res.send('🚀 AWS ECR + ECS (or Batch Fargate) demo app running successfully!');
// });
 
// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });
 

// Simple AWS Batch demo app
 
console.log("🚀 AWS Batch job started... ❤️❤️❤️❤️❤️");
 
// Simulate some work (e.g. data processing)
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
 
(async () => {
  try {
    console.log("🧮 Doing some mock computation...");
    await delay(3000); // wait 3 seconds
    console.log("✅ Job completed successfully!");
  } catch (err) {
    console.error("❌ Job failed:", err);
    process.exit(1);
  }
})();