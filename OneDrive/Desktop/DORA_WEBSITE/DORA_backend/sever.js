require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const connectDb = require('./utils/db');
const adminRoute = require('./routes/adminRoutes');
const authRouter = require('./routes/authRouter');
const FileRoute=require('./routes/fileRoutes')
const IARCRouter=require('./routes/iarcRoutes')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Enable CORS


const allowedOrigins = [process.env.API_URL, process.env.IARC_URL];
app.use(cors({
  origin: allowedOrigins,
  methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
  allowedHeaders: 'Content-Type,Authorization',
}));


// Serve static files from the uploads directory
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
app.use('/uploads', express.static(uploadDir));

app.use("/api/admin", adminRoute);
app.use("/api/admin", FileRoute);
app.use("/api/auth", authRouter);
app.use("/api/IARC", IARCRouter);



const PORT = process.env.PORT || 3000;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
});
