import React, {Component} from 'react';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock'

export default class BooksPage extends Component {

    gotService = new gotService();

    state = {
        selectedBook: 1,
        error: false
    }

    

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

     

        const itemDetails = (
            <ItemDetails 
            itemId = {this.state.selectedBook}
            getItem ={this.gotService.getBook}>
                <Field field='numberOfPages' label='Number of pages'/>
                <Field field='publisher' label='Publisher'/>
                <Field field='released' label='Released'/>
            </ItemDetails>
        )
        return(
            <ItemList 
            onItemSelected={itenId}
            getData={this.gotService.getAllBooks}  //передаем в пропсе функцию которая делает запрос  
            renderItem={({name}) => name}/> //мы передаем функцию которая берет объект item и будет из него возвращать item.name   0
        )

        
    }
}