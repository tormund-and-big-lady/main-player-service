import React, { Component } from 'react';
import style from './RecommendationBar.scss'
class RecommendationBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={style.mainContainer}>
        <h3 className={style.mainText}>People Also Viewed</h3>
        <ul className={style.dressList}>
          {this.props.recommendationData.map((dress, index) => (
            <li className={style.dressDescriptionContainer} key={index}>
              <a className={style.a} href='#'>
                <img src={dress.imageUrlsColor1[0]} className={style.dressImage}></img>
                <div className={style.designerText}>{dress.designer}</div>
                <div className={style.dressPrice}>${dress.price}.00</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default RecommendationBar;