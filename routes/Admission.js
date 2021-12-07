const router = require("express").Router();
const admission = require("../model/Admission");
// router.post('/',(req:Request, res:Response)=>{
//   console.log('inside admission')
//       var newadmission = new admission({
//       category:req.body.category,
//       grade:req.body.grade,
//       fees:req.body.fees,
//       seats:req.body.seats
//       });
//   newadmission.save()
//   .then(() => res.json("data saved"))
//   .catch(() =>
//     res.json("err")
//   );
//   console.log('created')
// })

router.post("/", (req, res) => {
  console.log("inside admission post");

  const admissionData = [];

  for (const option of req.body.options) {
    const opt = {
      grade: option.grade,
      fees: option.fees,
      seats: option.seats,
    };
    var newadmission = new admission({
      category: req.body.category,
      options: [opt],
    });
    newadmission.save();
    admissionData.push(newadmission);
  }
  res.json("data saved");
  console.log("created");
});

router.get("/:category", (req, res) => {
  console.log("inside admission");
  admission
    .find({ category: req.params.category })
    .then((data) => res.json(data))
    .catch(() => res.json("err"));
  console.log("created");
});

router.get("/", (req, res) => {
  console.log("inside admission");
  admission
    .find()
    .then((data) => res.json(data))
    .catch(() => res.json("err"));
  console.log("created");
});

module.exports = router;
