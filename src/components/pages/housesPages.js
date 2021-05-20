import React, {Component} from 'react';
import ErrorMessage from '../error';
import gotService from '../../services/gotService';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import RowBlock from '../rowBlock';


export default class HousesPage extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: 1,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedHouse: id
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
            getData={this.gotService.getAllHouses}  //передаем в пропсе функцию которая делает запрос  
            renderItem={({name}) => name}/> //мы передаем функцию которая берет объект item и будет из него возвращать item.name   0
        )

        const itemDetails = (
            <ItemDetails 
            itemId = {this.state.selectedHouse}
            getItem ={this.gotService.getHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label='Words'/>
                <Field field='titles' label='Titles'/>
                <Field field='ancestralWeapons' label='Ancestral Weapons'/>
            </ItemDetails>
        )
        return(
            <RowBlock left={itemList} right={itemDetails} />
        )

        
    }
}