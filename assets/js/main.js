
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
}

(async () => {
  const profileDate = await fetchProfileDate()
  updateProfileInformation(profileDate)
  console.log(profileDate)
})()
