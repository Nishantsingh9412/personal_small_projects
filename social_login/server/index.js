import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// const passportSetup = require('./passport.js');
import passortSetup from "./passport.js";
import authRoutes from './routes/auth.js';
import session from "express-session";
import passport from "passport";



const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
passortSetup();

app.use(
    session({
        name: "session",
        secret: "lama", // process.env.SESSION_SECRET || 'lama',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
        // Set secure to true if you're using HTTPS
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
}))

app.use('/auth', authRoutes);

app.use('/', (req, res) => {
    res.send(`Listening to port ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});