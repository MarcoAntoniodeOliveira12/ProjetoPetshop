import styles from './Veterinario.module.css';
function Veterinario(){
    return(
        <div className={styles.Vet}>
            
            <form className={styles.vete}>
                <fieldset className={styles.vetFieldset}>
                    <h1 className={styles.vetH1}>Veterinario</h1>

                        <label for="nome" className={styles.vetlabel}>Nome:</label>
                        <input type="text" id="nome" className={styles.vetinput} /><br></br>

                        <label for="nascimento" className={styles.vetLabelData}>Nascimento:</label>
                        <input type="date" id="nascimento" className={styles.vetinputData} /><br></br>

                        <label for="email" className={styles.vetlabel}>Email:</label>
                        <input type="email" id="email" className={styles.vetinput} /><br></br>

                        <label for="cpf" className={styles.vetlabel}>CPF:</label>
                        <input type="text" id="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="123.456.789-00" className={styles.vetinput} /><br></br>

                        <label for="rg" className={styles.vetlabel}>RG:</label>
                        <input type="text" id="rg" className={styles.vetinput} /><br></br>

                        <label for="fone" className={styles.vetlabel}>Telefone:</label>
                        <input type="tel" id="fone" className={styles.vetinput} /><br></br>
                    
                    <label for="especialidade" className={styles.vetlabelEspecialidade}>Especialidade:</label>
                    <select className={styles.vetSelect}>
                        
                        <option className={styles.Option}>Clinica</option>
                        <option className={styles.Option}>Radiologia</option>
                        <option className={styles.Option}>Grande Porte</option>
                        <option className={styles.Option}>Pequeno Porte</option>
                        
                    </select>
                    <img className={styles.vetImg} src="https://img.freepik.com/vetores-gratis/veterinario-com-o-cao-engracado-dos-desenhos-animados-e-ilustracao-do-vetor-personagens-isolados_1196-293.jpg"></img>
                </fieldset>
            </form>
        </div>
    );
}
export default Veterinario;