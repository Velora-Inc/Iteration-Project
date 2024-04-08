
import ArrayContainer from '../components/ArrayContainer';
import NpathsContainer from '../components/NpathsContainer';

const RightMainContainer = (props) => {
  const { currentIndex } = props
  // const arrayData = [0, 1, 2, 3, 4]
  
  return (
    <div className="left">
      <div className="right-main-container">
        <div className="animation-wrapper">
          {/* <ArrayContainer  
            arrayData={arrayData} 
            currentIndex={currentIndex} 
          /> */}
          <NpathsContainer
            currentIndex={currentIndex}
          />
        </div>
      </div>
    </div>

  );
};
  
export default RightMainContainer;
  