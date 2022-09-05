const asyncHandler = require('express-async-handler')


// @desc Get Goals
// @route Get /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Get goal'
    });
})

// @desc set Goal
// @route Post /api/goals
// @access Private
const setGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: 'Set goal'
    });
})

// @desc Upadet Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoals = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field') 
    };

    res.status(200).json({
        message: `Update goal ${req.params.id}`
    });
})

// @desc Delete Goal
// @route delete /api/goals/:id
// @access Private
const deleteGoals = asyncHandler(async (req, res) => {

    res.status(200).json({
        message: `Delete goal ${req.params.id}`
    });
})

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals,
}