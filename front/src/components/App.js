import '../App.css';
// import { firestore } from '../firebase';
import { useEffect } from 'react';
import db from '../firebaseInit';

function App() {
  useEffect(() => {
    console.log();
  });
  console.log('test');
  return (
    <div className="App">
      HEY 모두들 안녕 내가 누군지 아늬?
    </div>
  );
}

export default App;
