const skills = [
    {id: 1, skill: 'Created a BlackJack Game', link: "https://henrygillard.github.io/BlackJackGame/"},
    {id: 2, skill: 'Has a Product Page', link: "https://henrygillard.live/products"},
    {id: 3, skill: 'Drums with the Blue Devils', link: "https://www.youtube.com/watch?v=TexAUgaAU_o"}
  ];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateId,
    
};



function updateId(id, updatedSkill) {
  id = parseInt(id);
  const skillId = skills.find(skill => skill.id === id);
  Object.assign(skillId, updatedSkill)
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
};

  
function create(newSkill) {
  newSkill.id = Date.now() % 1000000;
  newSkill.link = ""
  skills.push(newSkill);
}

function getAll() {
  return skills;
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
};