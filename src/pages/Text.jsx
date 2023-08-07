import { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Sidebar from '../components/Sidebar';

const Text = () => {
  const [text, setText] = useState('');
  const [allText, setAllText] = useState([]);

  const addText = async e => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'myText'), {
        text: text,
      });
      console.log('Document written with ID: ', docRef.id);
      setText('');
      getText();
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const getText = async () => {
    await getDocs(collection(db, 'myText')).then(querySnapshot => {
      const newData = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setAllText(newData);
      console.log(allText, newData);
    });
  };

  useEffect(() => {
    getText();
  }, []);

  console.log('TEXT', text);
  console.log('All-TEXT', allText);

  return (
    <div className='bg-gray-200 w-full flex'>
      <Sidebar />
      <div className='flex flex-1 flex-col items-center justify-center'>
        <div className='flex mb-4 shadow-2xl'>
          <input
            type='text'
            placeholder='Type something...'
            onChange={e => setText(e.target.value)}
            className='px-3 py-2 outline-none'
            value={text}
          />

          <button
            type='submit'
            className='bg-black hover:bg-gray-900 text-white px-3 py-2'
            onClick={addText}
          >
            Send
          </button>
        </div>

        <ol className='list-disc'>
          {allText?.map((text, i) => (
            <li key={i}>{text.text}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Text;
