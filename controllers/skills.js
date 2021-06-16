const Skill = require("../models/skill");

module.exports = {
    index,
    show,
    new: newSkill,
    create,
};


function create(req, res) {
    Skill.create(req.body);
    res.redirect("/skills");
}

function newSkill(req, res) {
    res.render("/skills/new");
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render("skills/show", {skill}) 
};

function index(req, res) {
    const skills = Skill.getAll();
    res.render("skills/index", {skills});
};

