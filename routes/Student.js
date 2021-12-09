const router = require("express").Router();
const Student=require('../model/Student')
const bcryptjs = require('bcryptjs');


router.post('/register',async(req, res)=>{
  console.log('inside register')
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(req.body.password, salt);

      var user = new Student({
        name : req.body.name,
        email : req.body.email,
        class:req.body.class,
        rollNo:req.body.rollNo,
        photoid:req.body.photoid,
        password : hashedPassword,
      });
  user.save()
  .then(() => res.json("data saved"))
  .catch(() =>
    res.json("err")
  );
  console.log('created')
})

router.get("/:email", (req, res) => {
  console.log("inside student");
  Student.findOne({ email: req.params.email })
    .then((data) => res.json(data))
  .catch(() => res.json("err"));
  console.log("created");
});
router.get("/", (req, res) => {
  console.log("inside student get");
  Student
    .find()
    .then((data) => res.json(data))
    .catch(() => res.json("err"));
  
});

module.exports = router;