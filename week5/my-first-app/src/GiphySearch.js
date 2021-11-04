import { useState, useEffect } from 'react'

function GiphySearch(props) {

    const [imgUrl, setImgUrl] = useState("")

    const getImage = (query = props.init) => {
        const apiKey = 'ch8ADUlT0TKVCvKbX1v2tcMhhLqv2Wjd'
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`

        fetch(url, {
            method:  'GET',
        }).then(function(res){
            if (res.ok) {
                return res.json()
            }
            return Promise.reject(res)
        }).then(function({data}){
            //console.log('data: ', data.images.fixed_height.url)
            setImgUrl(data.images.fixed_height.url)
        })
       
    }

    const giphySearch = (e) => {
        e.preventDefault()
        getImage(e.target.search.value)
    }

    useEffect(getImage, [props.init])

    return (
        <div>
            <h1>Giphy Search</h1>
            <form onSubmit={giphySearch}>
                <input type="text" name='search'/>
                <button type="submit">Search</button>
            </form>
            <div>
                <img src={imgUrl} alt='' />
            </div>
        </div>
    )

}

export default GiphySearch