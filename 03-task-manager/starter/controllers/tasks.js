
const getAllTasks = (req,res) => {
    res.send('This is a controller for all tasks')
}

const createTask = (req,res) =>{
    res.json(req.body)
}

const getTask = (req,res) =>{
    res.json({id:req.params.id})
}

const updateTask = (req,res) =>{
    res.send('update a task')
}

const deleteTask = (req,res) =>{
    res.send('delete a task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} 