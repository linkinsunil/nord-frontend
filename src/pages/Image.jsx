/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase';

const Image = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  const imageListRef = ref(storage, 'images/');

  const addImage = () => {
    try {
      if (imageUpload === null) return;

      const imageRef = ref(storage, `images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then(snapshot => {
        getDownloadURL(snapshot.ref).then(url => {
          setImageList(prev => [...prev, url]);
        });
      });
    } catch (e) {
      console.error('Error uploading image: ', e);
    }
  };

  useEffect(() => {
    listAll(imageListRef).then(res => {
      res.items.forEach(item => {
        getDownloadURL(item).then(url => {
          setImageList(prev => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className='bg-gray-200 w-full flex flex-col p-4'>
      <input type='file' onChange={e => setImageUpload(e.target.files[0])} />

      <button
        className='bg-teal-600 text-white font-semibold px-3 w-fit py-2 my-2 rounded-md hover:bg-teal-700'
        onClick={addImage}
      >
        Add Image
      </button>

      <div className='flex flex-wrap gap-2'>
        {imageList.map((url, i) => (
          <img key={i} src={url} alt='' className='w-20 h-24 object-cover' />
        ))}
      </div>
    </div>
  );
};

export default Image;
