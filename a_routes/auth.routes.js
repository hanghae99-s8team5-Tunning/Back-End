require("dotenv").config(); // 환경변수 적용

const express = require("express");
const router = express.Router();
const axios = require("axios");
const passport = require("passport");
const UserRepository = require("../c_repositories/users.repository");
const userRepository = new UserRepository();
// const session = require("express-session");

// 세션ID를 가진 사용자가 접속했을 때,유저 정보 받아보기
router.get("/user", async (req, res) => {
  if (req.session.passport) {
    console.log(
      "여기에" +
        req.session.passport.user.user.displayName +
        "님이 접속했습니다."
    );
    res.json(req.session.passport.user);
  } else {
    const user_id = process.env.TEMP_USER_ID;
    const user = await userRepository.getUserById(user_id);

    res.status(200).json({ success: true, user });
  }
});

router.get("/user/:user_id", async (req, res) => {
  const user = await userRepository.getUserById(req.params.user_id);
  res.status(200).json({ success: true, user });
});

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).redirect(process.env.REDIRECT_PATH);
  });
});

// 구글 로그인 관련
router.get("/google", passport.authenticate("google"));

router.get(
  "/google_callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    failureMessage: true,
  }),
  (req, res) => {
    console.log("세션에 들어갈 user 객체:", req.user);

    res
      .status(200)
      .cookie("user", req.user, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      })
      .redirect("/");
  }
);

module.exports = router;
