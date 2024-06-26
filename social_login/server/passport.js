import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as GithubStrategy } from 'passport-github2';
import { Strategy as FacebookStrategy } from 'passport-facebook';

const passortSetup = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: "/auth/google/callback",
            },
            function (accessToken, refreshToken, profile, done) {
                done(null, profile);
                console.log(profile);
            }
        )
    );


    passport.use(
        new GithubStrategy(
            {
                clientID: process.env.GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET,
                callbackURL: "/auth/github/callback",
            },
            function (accessToken, refreshToken, profile, done) {
                done(null, profile);
                console.log(profile);
            }
        )
    );


    passport.use(
        new FacebookStrategy(
            {
                clientID: process.env.FACEBOOK_CLIENT_ID,
                clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
                callbackURL: "/auth/facebook/callback",
            },
            function (accessToken, refreshToken, profile, done) {
                done(null, profile);
                console.log(profile);
            }
        )
    );


    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
}

export default passortSetup
