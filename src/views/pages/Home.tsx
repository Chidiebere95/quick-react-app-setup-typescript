import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoremText } from '../../features/get-lorem/loremSlice';
import { AppContext } from '../../context/Context';
import { icons } from '../../assets/icons';
import { RootState } from '../../store/store';

function Home() {
  const dispatch = useDispatch<any>();
  const { loremText } = useSelector((state: RootState) => state.lorem);
  const { theme } = useContext<any>(AppContext);
  useEffect(() => {
    dispatch(getLoremText());
  }, []);
  return (
    <div className='App'>
      {loremText.status === 'loading' ? (
        <p>Loading...</p>
      ) : loremText.status === 'successful' ? (
        <div>
          {loremText.data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <div
            onClick={() => {
              navigator.clipboard.writeText(loremText.data.join(''));
            }}
            className='copy'
          >
            <button>Copy all</button>
            <figure className={`${theme}_theme_color`}>{icons.copy}</figure>
          </div>
        </div>
      ) : loremText.status === 'error' || loremText.status === 'base' ? (
        <p>
          Unable to connect to the internet. check your network and try again...
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
