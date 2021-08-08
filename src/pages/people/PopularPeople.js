import React, {useEffect, useState} from "react";
import {API_KEY, API_URL, IMAGE_URL} from "../../Components/services/Config";
import PeopleList from "./people-list/PeopleList";


export default function PopularPeople() {

    let [person, setPerson] = useState([])

    useEffect( () => {
        fetch(`${API_URL}person/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(response =>response.json())
            .then(({results}) =>{
                setPerson(results)
                console.log(results);
            })
}, [])
    return (
        <div>
            <h1>POPULAR PEOPLE</h1>
            <div className={'wrapper'}>
                {
              person.map(item =><PeopleList key={item.id}
                                            image={`${IMAGE_URL}w200${item.profile_path}`}
                                            name ={item.name} personId = {item.id}/>
                 
                )}
            </div>
        </div>
)
}