import React from 'react';
import './FeatureMovie.css'
// import { Container } from './styles';

function FeatureMovie({item}) {

    let firtsDate = new Date(item.first_air_date);
    let genres = [];

    for( let i in item.genres){
        genres.push(item.genres[i].name)
    }

    let description = item.overview;

    if(description.length > 50 && window.innerWidth < 760){
        description = description.substring(0, 50)+'...';
    }

    if(description.length > 200){
        description = description.substring(0, 200)+'...';
    }



  return(
      <div>
          <section className="feature" style={{
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
          }}>
            <div className="feature--vertical">
                <div className="feature--horizontal">
                    <div className="feature--name">{item.original_name}</div>
                    <div className="feature--info">
                        <div className="feature--points">{item.vote_average} pontos</div>
                        <div className="feature--year">{firtsDate.getFullYear()}</div>
                        <div className="feature--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="feature--description">{description}</div>
                    <div className="feature--buttons">
                        <a href={`/watch/${item.id}`} className="feature--watchbutton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="feature--mylistbutton">+ Minha lista</a>
                    </div>
                    <div className="feature--genres"><strong>Gêneros: </strong> {genres.join(', ')}</div>
                </div>
            </div>
          </section>
      </div>
  )
}

export default FeatureMovie;