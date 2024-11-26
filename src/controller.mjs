import createUser from "./model.mjs";

export default function createuser(req,res){
  createUser(uuidv4(), req.body.name, req.body.email, req.body.password);
  res.render('views/user.html');
}
