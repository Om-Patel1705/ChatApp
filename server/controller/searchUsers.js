const pool = require("../config/db");

const searchUsers = async (req, res) => {
 console.log("Reach serachUsers")
  console.log(req.user.id);

  const user = await pool.query(
    ` select * from (select id,username,email,pic from users where username like '${req.query.name}%') as r1 where id != '${req.user.id}'`
  );
  console.log(user.rows);
  res.json(user.rows);
};

module.exports = searchUsers;
