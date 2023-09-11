import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { firebaseAuth } from './Firebase'
import { HideMainContent, ShowMainContent } from '../Components/Common/Login'

const googleBtn = document.querySelector('#googleLoginBtn')
const googleLogoutBtn = document.querySelector('#userImageContainer')
// Variables for Login
// const [
//   mainContent,
//   titleAppContainer,
//   loginContainer,
//   googleLoginBtnContainer
// ] = [
//   document.getElementById('MainContent'),
//   ...document.getElementsByClassName('titleAppContainer'),
//   ...document.getElementsByClassName('loginContainer'),
//   ...document.getElementsByClassName('googleLoginBtnContainer')
// ]

// const displayNameContainer = document.getElementsByClassName(
//   'displayNameContainer'
// )
// const userImageContainer = document.getElementsByClassName('userImageContainer')
// const toggleContainer = document.getElementsByClassName('toggle-container')
// signInWithPopup(firebaseAuth, googleProvider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result)
//     const token = credential.accessToken
//     // The signed-in user info.
//     const user = result.user
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code
//     const errorMessage = error.message
//     // The email of the user's account used.
//     const email = error.customData.email
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error)
//     // ...
//   })
googleBtn.addEventListener('click', async () => {
  const googleProvider = new GoogleAuthProvider()
  try {
    const userCredentials = await signInWithPopup(firebaseAuth, googleProvider)
    // console.log(userCredentials)
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(userCredentials)
    const user = userCredentials.user
    if (user) {
      console.log(user)
      ShowMainContent(user)
    }
    // const token = credential.accessToken
    // console.log(token)
    // El usuario ha iniciado sesión exitosamente con Google
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error)
  }
})

googleLogoutBtn.addEventListener('click', async () => {
  try {
    await signOut(firebaseAuth)
    HideMainContent()
  } catch (error) {
    console.log(error)
  }
})
