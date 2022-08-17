

function DogCard (props) {

    const img = props.img

    console.log(img)

    return(
        <div>
            <img alt='Dog' src={img}/>
        </div>
    )
}

export default DogCard