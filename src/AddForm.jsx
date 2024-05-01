import React, {useState} from "react"
import './App.css'
import Axios from 'axios'

const AddForm = () => {

// Statet jotka pitää kirjaa input kenttien sisällöstä jokaisella napin painalluksella
const [title, setTitle] = useState("")
const [img, setImg] = useState("")
const [description, setDescription] = useState("")
const [price, setPrice] = useState("")

// Funktio jota kutsutaan kun formi submitoidaan-----------
const formSubmitted = (event) => {
    event.preventDefault()
    
    // Luodaan objekti jonne sijoitetaan arvot statesta
    const newItem = {
        title: title,
        img: img,
        description: description,
        price: price
    }
    create(newItem) // Kutsutaan alla olevaa create funktiota
}

//----------------------------form submit päättyy-------

// Uuden itemin luomiseen käytettävä http pyyntö tehdään Axios kirjaston avulla
const create = async (newItem) => {
    const request = await Axios.post("https://shopbackendforreact.azurewebsites.net/api/items", newItem)
    await alert(request.data)
}


return(
    <div className="add-div">
        <form onSubmit={formSubmitted}>
            <input type="text" placeholder="Title" value={title} 
            onChange={({target}) => setTitle(target.value)}
            required
            />

            <input type="text" placeholder="Image-link" value={img}
            onChange={({target}) => setImg(target.value)} 
             />

            <input type="text" placeholder="Description" value={description}
            onChange={({target}) => setDescription(target.value)} 
            required />

            <input type="text" placeholder="Price" value={price}
             onChange={({target}) => setPrice(target.value)} 
             required />

            <input type="submit" value="tallenna"/>
        </form>
    </div>
    )
}

export default AddForm