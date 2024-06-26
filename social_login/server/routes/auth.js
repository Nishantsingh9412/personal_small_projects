import express from "express";
import passport from "passport";


const router = express.Router();

const CLIENT_URL = "http://localhost:3000/";


router.get('/login/success', (req, res) => {
    if (req.user) {
        res.status(200).json({
            success: true,
            message: 'logged in',
            user: req.user,
            // If Using Cookies
            // cookies: req.cookies
            // If Using JWT Token
            // jwt: req.user.token
        })
        console.log("User Logged in successfully")
    }
})

router.get('/login/failed', (rea, res) => {
    res.status(401).json({
        success: false,
        message: 'failure'
    })
})

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect(CLIENT_URL);
  });
});

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get('/google/callback', passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed'
}))



router.get('/github', passport.authenticate('github', { scope: ['profile'] }));

router.get('/github/callback', passport.authenticate('github', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed'
}))


router.get('/facebook', passport.authenticate('facebook', { scope: ['profile'] }));

router.get('/facebook/callback', passport.authenticate('facebook', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/login/failed'
}))



export default router;