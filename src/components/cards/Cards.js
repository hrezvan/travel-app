import React from 'react';
import CardItem from '../cardItem/CardItem';
import './Cards.scss';


function Cards() {
  return (
    <div className='cards'>
      <h1>Check out all these amazing Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Abou-zeyd Abad Desert on a guided tour'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/iran-1.jpg'
              text='Visit amazing attraction places and experience nightlife in the city of half world'
              label='Nightlife'
              path='/services'
            />
            <CardItem
              src='images/iran-3.jpg'
              text='Explor the treasures of Persepolis and walk through the ancient persian empire'
              label='History'
              path='/services'
            />
            <CardItem
              src='images/iran-2.jpg'
              text='Visit Colored ancient painting traditions and wonderful persian architecture'
              label='Art'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;