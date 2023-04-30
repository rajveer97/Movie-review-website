const Movie = (props) => {
    return(
        <div className="movie">
            <img src= {props.img} alt=""></img>
            <p>{props.title}</p>
            <p>Year: {props.year}</p>
        </div>
    )
}

export default Movie;