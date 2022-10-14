//firebase.js
import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';




const firebaseConfig = {
    // firebase 설정과 관련된 개인 정보
    apiKey: process.env.REACT_APP_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

// firebaseConfig 정보로 firebase 시작
const app = firebase.initializeApp(firebaseConfig)
const firestore = getFirestore(app);


// 필요한 곳에서 사용할 수 있도록 내보내기
// 다른 곳에서 불러올때 firestore로 불러와야 함!!
// export default firebase;
export { firestore };
// export const auth = authObj;