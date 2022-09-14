const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalsModel')

const User = require('../models/userModel')

// @desc Get Goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    
    const goals = await Goal.find({ user: req.user.id})
    
    res.status(200).json(goals);
})

// @desc set Goal
// @route Post /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field') 
    };

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(goal);
})

// @desc Upadet Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
    
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field') 
    };

    const goal = await Goal.findById(req.params.id)

    if(goal) {

        const user = await User.findById(req.user.id)

        // check for user
        if(!user) {
            res.status(401)

            throw new Error('User not found')
        } else {

            // make sure the log in user matches the goal user
            if(goal.user.toString() !== user.id) {
                res.status(401)

                throw new Error('User not authorized')
            } else {
                const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

                res.status(200).json(updateGoal)
            }
        }
    } else {

        res.status(400)

        throw new Error('Goal not found')
    }

   
})

// @desc Delete Goal
// @route delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {

    console.log("yes");
    
    const goal = await Goal.findById(req.params.id)

    if(goal) {

        const user = await User.findById(req.user.id)

        // check for user
        if(!user) {
            res.status(401)

            throw new Error('User not found')
        } else {

            // make sure the log in user matches the goal user
            if(goal.user.toString() !== user.id) {
                res.status(401)

                throw new Error('User not authorized')
            } else {
                await goal.remove()


                res.status(200).json({
                    id:req.params.id
                })
            }
        }
        
        
    } else {

        res.status(400)

        throw new Error('Goal not found')
    }

})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}