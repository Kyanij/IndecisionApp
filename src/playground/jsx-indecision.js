console.log('App.js is running');

const app ={
    title:'Indecision App',
    subtitle:'Put your life in your hands of a computer',
    option:[]
};

const onFormSubmit = (e) =>{
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.option.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeAll = () =>{
    app.option = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()* app.option.length);
    const option = app.option[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderApp = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
           {app.subtitle && <p>{app.subtitle}</p>}
            {app.option.length >0 ? <p>Here are your options</p> : <p>No options</p> }
            <button disabled={app.option.length == 0} onClick={onMakeDecision}>What Should I Do</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.option.map((item) => <li key={item}> {item}</li> )
            }
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);
}

renderApp();







 