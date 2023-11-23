import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from '../../context/Context';
import { randomFuncTion } from '../../random-function/randomFunction';
import { getLoremTextAboutPage } from '../../features/get-lorem-about-page/loremAboutPageSlice';
import { icons } from '../../assets/icons';
import { RootState } from '../../store/store';
function About() {
  const dispatch = useDispatch<any>();
  const { loremTextAboutPage } = useSelector(
    (state: RootState) => state.loremAboutPage
  );
  const { theme } = useContext<any>(AppContext);
  useEffect(() => {
    dispatch(getLoremTextAboutPage());
  }, []);
  return (
    <div className='App'>
      {loremTextAboutPage.status === 'loading' ? (
        <p>Loading...</p>
      ) : loremTextAboutPage.status === 'successful' ? (
        <div>
          {loremTextAboutPage.data.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
          <div
            onClick={() => {
              navigator.clipboard.writeText(loremTextAboutPage.data.join(''));
            }}
            className='copy'
          >
            <button>Copy all</button>
            <figure className={`${theme}_theme_color`}>{icons.copy}</figure>
          </div>
        </div>
      ) : loremTextAboutPage.status === 'error' ||
        loremTextAboutPage.status === 'base' ? (
        <p>
          Unable to connect to the internet. check your network and try again...
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default About;
