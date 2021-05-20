import React, {Component} from 'react';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import {withRouter} from 'react-router-dom'


class BooksPage extends Component {

    gotService = new gotService();

    state = {
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

     

        
        return(
            <ItemList 
            onItemSelected={(itemId) =>{
                this.props.history.push(itemId)
            }}
            getData={this.gotService.getAllBooks}  //передаем в пропсе функцию которая делает запрос  
            renderItem={({name}) => name}/> //мы передаем функцию которая берет объект item и будет из него возвращать item.name   0
        )

        
    }
}

export default withRouter(BooksPage);