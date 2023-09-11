const [
  mainContent,
  titleAppContainer,
  loginContainer,
  googleLoginBtnContainer,
  displayNameContainer,
  userImageContainer,
  toggleContainer
] = [
  document.getElementById('MainContent'),
  ...document.getElementsByClassName('titleAppContainer'),
  ...document.getElementsByClassName('loginContainer'),
  ...document.getElementsByClassName('googleLoginBtnContainer'),
  ...document.getElementsByClassName('displayNameContainer'),
  ...document.getElementsByClassName('userImageContainer'),
  ...document.getElementsByClassName('toggle-container')
]
export const ShowMainContent = ({ displayName, photoURL }) => {
  // do something
  const userName = displayName
  const userImageUrl = photoURL
  console.log('el user es:', userName)
  titleAppContainer.classList.add('Auth')
  loginContainer.classList.add('Auth')
  googleLoginBtnContainer.classList.add('Auth')
  displayNameContainer.classList.add('Auth')
  userImageContainer.classList.add('Auth')
  toggleContainer.classList.add('Auth')
  mainContent.classList.remove('hide')
  displayNameContainer.innerHTML = `<span>${userName}</span>`
  userImageContainer.innerHTML = `<img id="googleLogoutBtn" src="${userImageUrl}" alt="UserImage">`
}

export const HideMainContent = () => {
  console.log('el logout exitoso')
  titleAppContainer.classList.remove('Auth')
  loginContainer.classList.remove('Auth')
  googleLoginBtnContainer.classList.remove('Auth')
  displayNameContainer.classList.remove('Auth')
  userImageContainer.classList.remove('Auth')
  toggleContainer.classList.remove('Auth')
  mainContent.classList.add('hide')
}
