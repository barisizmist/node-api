const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({
    data: {
      userList: [
        {
          name: 'John',
          surname: 'London',
          age: 36
        },
        {
          name: 'John',
          surname: 'Paris',
          age: 34
        }
      ]
    }
  });
});

module.exports = router;
