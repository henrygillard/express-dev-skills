const skills = [
    {id: 1, skill: 'Created a BlackJack Game', link: "https://henrygillard.github.io/BlackJackGame/"},
    {id: 2, skill: 'Has a Product Page', link: "https://henrygillard.live/products"},
    {id: 3, skill: 'Drums with the Blue Devils', link: "https://www.youtube.com/watch?v=TexAUgaAU_o"}
  ];

module.exports = {
    getAll,
    getOne,
    create,
};
  
function create(newSkill) {
  newSkill.id = Date.now() % 1000000;
  newSkill.done = false;
  skills.push(newSkill);
}

function getAll() {
  return skills;
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
};