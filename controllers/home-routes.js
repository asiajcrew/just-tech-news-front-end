const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.session);
  res.render('homepage', {
      id: 1,
      post_url: 'google.com',
      title: 'Google',
      created_at: new Date(),
      vote_count: 10,
      comments: [{}, {}],
      user: {
          username: 'test'
      }
  });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

module.exports = router;