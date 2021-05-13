import React, {Component} from 'react';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock'

export default class CharacterPage extends Component {

    gotService = new gotService();

    state = {
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
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

        const itemList = (
            <ItemList 
            onItemSelected={this.onItemSelected}
            getData={this.gotService.getAllCharacters}  //передаем в пропсе функцию которая делает запрос  
            renderItem={({name, gender}) => `${name} (${gender})`}/> //мы передаем функцию которая берет объект item и будет из него возвращать item.name   0
        )

        const itemDetails = (
            <ItemDetails 
            itemId = {this.state.selectedChar}
            getItem ={this.gotService.getCharacter}>
                <Field field='gender' label='Gender'/>
                <Field field='born' label='Born'/>
                <Field field='died' label='Died'/>
                <Field field='culture' label='Culture'/>
            </ItemDetails>
        )
        return(
            <RowBlock left={itemList} right={itemDetails} />
        )

        
    }
}