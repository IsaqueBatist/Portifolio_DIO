
function updateProfileInformation(profileDate){
  const photo = document.getElementById('profile.photo')
  photo.src = profileDate.photo
  photo.alt = profileDate.name
  const name = document.getElementById('profile.name')
  name.innerText = profileDate.name

  const job = document.getElementById('profile.job')
  job.innerText = profileDate.job
  const location = document.getElementById('profile.location')
  location.innerText = profileDate.location
  const phone = document.getElementById('profile.phone')
  phone.innerText = profileDate.phone
  phone.href = `tel:${profileDate.phone}`
  const email = document.getElementById('profile.email')
  email.innerText = profileDate.email
  email;href = `mailto:${profileDate.email}`
  const github = document.getElementById('profile.git')
  github.innerHTML = 'Github'
  github.href= 'https://github.com/IsaqueBatist'
  const linkedin = document.getElementById('profile.linkedin')
  linkedin.innerText = 'Linkedin'
  linkedin.href = 'https://www.linkedin.com/in/isaquebarbos/'
}
function updateProfileSkills(profileDate){
  const softSkills = document.getElementById('profile.skills.softSkills')
  softSkills.innerHTML = profileDate.skills.softSkills.map(skill => `<li> ${skill} </li>`).join('')
}
function updateProfileHardSkills(profileDate){
  const hardSkills = document.getElementById('profile.skills.harSkills')
  hardSkills.innerHTML = profileDate.skills.hardSkills.map(skill =>
    `<li ${skill.learning ? 'class="learning"' : ''}><img src="${skill.logo}" alt="${skill.name}" title="${skill.name, skill.learning ? ' learning' : ''}"></li>`).join('')
}
function updateProfileLanguages(profileDate){
  const languages = document.getElementById('profile.skills.languages')
  languages.innerHTML = profileDate.languages.map(language =>
    `<li>${language}</li>`).join('')
}
function updateProfilePortfolio(profileDate){
  const portfolio = document.getElementById('profile.portfolio')
  portfolio.innerHTML = profileDate.portfolio.map(project => {
    return `
    <li>
    <h3 ${project.github ? 'class = "github"' : ''}>${project.name}</h3>
    <a href="${project.url}" target="_blank">${project.url}</a>
    </li>
  `
  }).join('')
}
function updateProfileExperience(profileDate){
  const experience = document.getElementById('profile.professionalExperience')
  experience.innerHTML = profileDate.professionalExperience.map(experience => {
    return `
    <li>
      <h3 class="title">${experience.name}</h3>
        <p class="period">${experience.period}</p>
        <p>${experience.description}</p>
    </li>
    `
  }).join('')
}
(async () => {
  const profileDate = await fetchProfileDate()
  updateProfileInformation(profileDate)
  updateProfileSkills(profileDate)
  updateProfileHardSkills(profileDate)
  updateProfileLanguages(profileDate)
  updateProfilePortfolio(profileDate)
  updateProfileExperience(profileDate)
})()
