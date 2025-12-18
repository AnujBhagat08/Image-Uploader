import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import path from "path";

const app = express();
import { v2 as cloudinary } from "cloudinary";

// Configuration
cloudinary.config({
  cloud_name: "dj1bwbrwb",
  api_key: "876611755619622",
  api_secret: "_McY7L2pje23_CG6wzlBSKOocfs",
});

mongoose
  .connect(
    "mongodb+srv://adab52620_db_user:CoERuJq2p1ju8NWG@cluster0.jhl9lt2.mongodb.net/",
    { dbName: "NodeJs_Mastery_Course" }
  )
  .then(() => console.log("MongoDb Connected...!"))
  .catch((err) => console.log(err));

//   rendering ejs file

app.get("/", (req, res) => {
  res.render("index.ejs", { url: null });
});

const storage = multer.diskStorage({
//   destination: "./public/uploads",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const imageSchema = new mongoose.Schema({
  filename: String,
  public_id: String,
  imgUrl: String,
});

const File = mongoose.model("cloudinary", imageSchema);

app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file.path;

  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "NodeJS_Mastery_course",
  });

  //   save to DB
  const db = await File.create({
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });

  res.render("index.ejs", { url: cloudinaryRes.secure_url });

//   res.json({ message: "file Uploaded Successfully", cloudinaryRes });
});

const port = 1000;

app.listen(port, () => console.log(`Server is running on port:${port}`));
