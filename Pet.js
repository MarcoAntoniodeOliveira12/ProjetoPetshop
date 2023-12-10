import './Pet.css';
function Pet() {
    return (
        <div>
            <h2>PETSHOP</h2>
            <form>
                <fieldset>
                <h1>CADASTRO DE PET</h1>
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" /><br></br>
                    
                    <label for="idade">Idade:</label>
                    <input type="text" id="idade" /><br></br>

                    <label for="raca">Raça:</label>
                    <input type="text" id="raca" /><br></br>

                    <label for="cor">Cor:</label>
                    <input type="text" id="cor" /><br></br>

                    <button>CADASTRAR</button>
                    <img src="https://www.pngall.com/wp-content/uploads/10/Pet-PNG.png"></img>
                </fieldset>
                
            </form>
            
        </div>
        
    );
}

export default Pet;