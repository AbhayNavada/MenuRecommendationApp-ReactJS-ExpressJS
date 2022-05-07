import '../stylesheets/UserPreferences.css';
import { Component } from 'react';
import { Button} from 'react-bootstrap';

class UserPreferences extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showAllergies: true,
            showDietaryPreferences: false,
            showIntolerances: false,
            allergiesCheckBox: {
                "Eggs": false, 
                "Peanuts": false, 
                "Shellfish": false
            },
            allergies: [],
            dietaryPreferencesheckBox: {
                "Vegan": false, 
                "Vegetarian": false, 
                "Keto": false
            },
            dietaryPreferences: [],
            intolerancesCheckBox: {
                "Dairy": false, 
                "Gluten": false, 
                "Caffeine": false
            },
            intolerances: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showDietaryPreferencesOptions = this.showDietaryPreferencesOptions.bind(this);
        this.showIntolerancesOptions = this.showIntolerancesOptions.bind(this);
    }

    handleInputChange(event) {
        let target = event.target;

        if (target.name === 'Eggs' || target.name === 'Peanuts' || target.name === 'Shellfish') {
            if (target.checked) {
                this.state.allergiesCheckBox[target.name] = true;
                this.state.allergies.push(target.name);
            } else {
                this.state.allergiesCheckBox[target.name] = false;
                for (let i = 0; i < this.state.allergies.length; i++) {
                    if (this.state.allergies[i] === target.name) {
                        this.state.allergies.splice(i, 1);
                    }
                }
            }
        }

        if (target.name === 'Vegan' || target.name === 'Vegetarian' || target.name === 'Keto') {
            if (target.checked) {
                this.state.dietaryPreferencesheckBox[target.name] = true;
                this.state.dietaryPreferences.push(target.name);
            } else {
                this.state.dietaryPreferencesheckBox[target.name] = false;
                for (let i = 0; i < this.state.dietaryPreferences.length; i++) {
                    if (this.state.dietaryPreferences[i] === target.name) {
                        this.state.dietaryPreferences.splice(i, 1);
                    }
                }
            }
        }
    
        if (target.name === 'Dairy' || target.name === 'Gluten' || target.name === 'Caffeine') {
            if (target.checked) {
                this.state.intolerancesCheckBox[target.name] = true;
                this.state.intolerances.push(target.name);
            } else {
                this.state.intolerancesCheckBox[target.name] = false;
                for (let i = 0; i < this.state.intolerances.length; i++) {
                    if (this.state.intolerances[i] === target.name) {
                        this.state.intolerances.splice(i, 1);
                    }
                }
            }
        }

        console.log("Allergies:", this.state.allergies);
        console.log("Dietary Preferences:", this.state.dietaryPreferences);
        console.log("Intolerances:", this.state.intolerances);
    
    }

    showDietaryPreferencesOptions() {
        this.setState({showAllergies: false});
        this.setState({showDietaryPreferences: true});
    }

    showIntolerancesOptions() {
        this.setState({showDietaryPreferences: false});
        this.setState({showIntolerances: true});
    }


    handleSubmit() {

        let data = {
            "allergies": this.state.allergies,
            "dietaryPreferences": this.state.dietaryPreferences,
            "intolerances": this.state.intolerances
        };

        fetch(`http://localhost:4000/userPreferences?prefs=${JSON.stringify(data)}`)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }


  render() {
    return (
        <div>
            <div className='ai-intro'>
                Hello, I'm BLANK, your Smart A.I. waiter. Before we get started, let's get some basic information.
            </div>
            {this.state.showAllergies && <div>
                <div className='prefQuestions'>
                Do you have any allergies which need to be considered?
                </div>
                <form className='prefOptions'>
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Eggs"
                        type="checkbox"
                        checked={this.state.allergiesCheckBox[0]}
                        onChange={this.handleInputChange} />
                    Eggs
                    </label>
                    <br />
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Peanuts"
                        type="checkbox"
                        checked={this.state.allergiesCheckBox[1]}
                        onChange={this.handleInputChange} />
                    Peanuts
                    </label>
                    <br />
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Shellfish"
                        type="checkbox"
                        checked={this.state.allergiesCheckBox[2]}
                        onChange={this.handleInputChange} />
                    Shellfish
                    </label>
                </form>
                <Button className='custom-btn' onClick={this.showDietaryPreferencesOptions}>Click here to proceed...</Button>
            </div>}

            {this.state.showDietaryPreferences && <div>
                <div className='prefQuestions'>
                Do you have any dietary preferences?
                </div>
                <form className='prefOptions'>
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Vegan"
                        type="checkbox"
                        checked={this.state.dietaryPreferencesheckBox[0]}
                        onChange={this.handleInputChange} />
                    Vegan
                    </label>
                    <br />
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Vegetarian"
                        type="checkbox"
                        checked={this.state.dietaryPreferencesheckBox[1]}
                        onChange={this.handleInputChange} />
                    Vegetarian
                    </label>
                    <br />
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Keto"
                        type="checkbox"
                        checked={this.state.dietaryPreferencesheckBox[2]}
                        onChange={this.handleInputChange} />
                    Keto
                    </label>
                </form>
                <Button className='custom-btn' onClick={this.showIntolerancesOptions}>Click here to proceed...</Button>
            </div>}

            {this.state.showIntolerances && <div>
                <div className='prefQuestions'>
                Do you have any intolerances which need to be considered?
                </div>
                <form className='prefOptions'>
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Dairy"
                        type="checkbox"
                        checked={this.state.intolerancesCheckBox[0]}
                        onChange={this.handleInputChange} />
                    Dairy
                    </label>
                    <br />
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Gluten"
                        type="checkbox"
                        checked={this.state.intolerancesCheckBox[1]}
                        onChange={this.handleInputChange} />
                    Gluten
                    </label>
                    <br />
                    <label className='optionLabels'>
                    <input className='checkBox'
                        name="Caffeine"
                        type="checkbox"
                        checked={this.state.intolerancesCheckBox[2]}
                        onChange={this.handleInputChange} />
                    Caffeine
                    </label>
                </form>
                <Button className='custom-btn custom-final-btn' onClick={this.handleSubmit} href="/recommendations">GET YOUR RECOMMENDATIONS NOW!</Button>
            </div>}
        </div>
    );
  }

}

export default UserPreferences;
