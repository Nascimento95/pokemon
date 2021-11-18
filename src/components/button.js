const Button = () => {
    const clickRandom = () => {
        let min = 1;
        let max = 151;
        
        let result = Math.floor(Math.random() * (max - min + 1) + min)
        console.log(result);
        return result
    }
    return (
        <div>
            <button onClick={clickRandom} type="button" class="btn btn-success">Change pokemon</button>
        </div>
    );
  }
  
  export default Button