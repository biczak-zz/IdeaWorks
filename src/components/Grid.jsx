import React from 'react';
import Masonry from 'react-masonry-component';
import '../../public/scss/_grid.scss';

const masonryOptions = {
  transitionDuration: 0,
};

const Grid = (props) => {
  // Map the elements array (passed via props), and display each element
  const childElements = props.elements.map((element) => {
    return (
      <li className="image-element-class">
        <img className="grid-image" src={element.src} alt={element.alt}/>
        <p className="grid-subText1">{element.date}</p>
        <p className="grid-mainText">{element.mainText}</p>
        <p className="grid-subText2">Presented by <a href="#" className="grid-link">{element.presentedBy}</a></p>
        <img className="separator" src="../assets/separator.png" alt="separator" />
      </li>
    );
  });

  return (
    <Masonry
      className={'grid'} // default ''
      elementType={'ul'} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
    >
      {childElements}
    </Masonry>
  );
};

export default Grid;
