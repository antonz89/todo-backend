//old
// const Blog = require('../models/Blogs');

//new
const Todo = require('../models/Todo');

//------Old-------
// async function getOne(req, res){
//     const getOneBlog = await Blog.findOne({
//         id: {
//             $exists: true
//         }
//     })
//     res.json({
//         success:true,
//         getOneBlog
//     })
// }
// async function getOneByID(req, res){
//     try {
//         const getBlog = await Blog.findOne({
//             id: req.params.id
//         })
//         res.json({
//             success:true,
//             getBlog
//         })
//     } catch (error) {
//         console.log(e);
//     }   
// }
//------New----------
async function getAllTodo(req, res) {
    //query blogs 
    try {
      const allToDos = await Todo.find({});
      res.json({allTodos: allToDos });
    }catch(e){
      console.log(e);
    }
}

async function createOneToDo (req, res){
  try {
    const name = req.body.name;
    const description = req.body.description;
    const completed = req.body.completed;
    const dateCompleted = req.body.dateCompleted;
    const status = req.body.status
    
    const newToDo = new Todo ({
        name,
        description,
        completed,
        dateCompleted,
        status
    })
    const savedToDo = await newToDo.save()
    // name: String,
    // description: String, 
    // completed: Boolean,
    res.json({
      Todos: savedToDo
     });
  }catch(e){
    console.log(e);
  }
}

async function deleteT (req,res){
  const entryId = req.params.id
  try {
    const deleted = await Todo.deleteOne({id:entryId})
    
    res.json({
      deleted
    
     });

  } catch (e) {
    console.log(e)
  }
}

async function updateToDo(req,res){
  const entryId = req.params.id

  try {
    await Todo.updateOne({id: entryId}, req.body);
  } catch (err) {
    console.log(err);
    throw err;
  }
  res.json({
    sucess:true,
    message: `blog entry id ${entryId} updated`
  })
}


module.exports = {
    getAllTodo,
    createOneToDo,
    deleteT,
    updateToDo
}