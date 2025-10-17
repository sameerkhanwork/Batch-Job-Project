const express = require('express');
const app = express();
 
const port = process.env.PORT || 80;
 
app.get('/', (req, res) => {
  res.send('🚀 AWS ECR + ECS (or Batch Fargate) demo app running successfully!');
});
 
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
 