import classes from './Names.module.css'


const Names=()=>{
    
    const formSubmitHandler=(event)=>{
        event.preventDefault();
        var moneyNumber =   Math.floor(Math.random() * (100 - 85 + 1) + 85)
        const userName = document.getElementById('username').value;
        var highh =  "Hello " +  userName+ " your love score with Money is "+moneyNumber +"% ! Hehe, Rich kid ."; 
       const money = 'Money'
       
       const secondName = document.getElementById('secondname').value;
        var randomNumber = Math.floor(Math.random()*100 + 1);
       
       
        var total = "Hello "+ userName + " your love score with " + secondName+ " is "+ randomNumber + "% ! ";
        var high =  "Hello "+ userName + " your love score with " + secondName+ " is "+ randomNumber + "% ! Both of you are obssessed with each other"; 
        var low =  "Hello "+ userName + " your love score with " + secondName+ " is "+ randomNumber + "% ! both of you should probably spend more time together to develop more feelings ";
        if (secondName === money){
            document.getElementById("result").innerHTML =highh;}

           else  if ( randomNumber <= 30){
            document.getElementById("result").innerHTML =low;}
            else if ( randomNumber > 30 && randomNumber < 75){
               document.getElementById("result").innerHTML =total;}
               else if ( randomNumber >= 75){
                  document.getElementById("result").innerHTML = high ;
               };
           
            
    }
    return(
        <>
<form onSubmit={formSubmitHandler} className={classes.form}>
    <div className={classes.input}>
        <label htmlFor='name' className={classes.name}>Input your name</label>
        <input type='text' id='username' className={classes.inputs} name='text'/>
        <div>
        <label htmlFor='name'  className={classes.name}>Input name of person 2</label>
        <input type='text' id='secondname' className={classes.inputs} name='text'/>
        </div>
    </div>
    <div>
        <button className={classes.subButton} >
            Submit your names!
        </button>
    </div>
</form>
<div  id='result' className={classes.result}>
    <em>
Result
</em>
</div>
</>
    );
};
export default Names;