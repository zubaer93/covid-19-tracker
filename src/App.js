
import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png'

class App extends React.Component {

    state = {
        data : {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        
        this.setState({ data: fetchedData }); 
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        
        this.setState({ data: fetchedData, country: country }); 
    }

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image } src={coronaImage} alt="COVID_19"/>
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country}/>
                <p>
                Developed by 
                <a href="mailto:mail2zubaer@gmail.com" target="_top"> Zubaer Ahmad</a>
                </p>
            </div> 
        )
    }
}

export default App;