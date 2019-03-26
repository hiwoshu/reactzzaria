import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDkIURSTRlTRtLTHnY7kWKwA3CFub21lEw',
  authDomain: 'reactzzaria-43698.firebaseapp.com',
  databaseURL: 'https://reactzzaria-43698.firebaseio.com',
  projectId: 'reactzzaria-43698',
  storageBucket: 'reactzzaria-43698.appspot.com',
  messagingSenderId: '406150217195'
}

firebase.initializeApp(config)

export default firebase
