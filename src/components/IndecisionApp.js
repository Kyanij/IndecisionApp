import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption:undefined
    }
   
    handleDeleteOptions = () => {
     this.setState(() => ({options:[]}) );
    }
    handleDeleteOption = (optionToRemove) => {
        
        this.setState( (prevState) => (
            {
                options:prevState.options.filter((option) => optionToRemove !== option)
            }
        ));

    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random()*this.state.options.length);
        const option = this.state.options[randomNum];        
        this.setState( () => ({selectedOption:option}));

    }

    clearSelectedOption = () => {
        this.setState( () => ({selectedOption:undefined})); 
    }
    handleAddOption = (option) => {
        if(!option) {
            return 'Enter a valid value to item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists';
        }

      this.setState( (prevState) => ({
          options:prevState.options.concat(option)
        }));
    }
    componentDidMount(prevProps,prevState) {
      try {

        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
       if(options) {
          this.setState( () => ({ options }));
       }

      } catch (e) {
        // Do nothing at all
      }
    
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount yeah');
    }

    render(){
     
        const subtitle ='Put your life in hand of a computer';
        return (
            <div>
            <Header subtitle={subtitle} />
            <div className="container">
            <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
             />
             <div className="widget">
             <Options 
                 options={this.state.options} 
                 handleDeleteOptions = {this.handleDeleteOptions}
                 handleDeleteOption = {this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
            </div>
             </div>
            <OptionModal selectedOption={this.state.selectedOption} clearSelectedOption={this.clearSelectedOption}/>
            </div>
        );
    }
}

export default IndecisionApp;