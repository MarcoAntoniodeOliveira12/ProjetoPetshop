import styles from './Atendimento.module.css';
function Atendimento(){
    return(
        <div className={styles.Vet}>
            
            <form className={styles.vete}>
                <fieldset className={styles.vetFieldset}>
                    <h1 className={styles.vetH1}>Atendimento</h1>

                        <label for="nome" className={styles.vetlabel}>Nome:</label>
                        <input type="text" id="nome" className={styles.vetinput} /><br></br>

                        <label for="fone" className={styles.vetlabel}>Telefone:</label>
                        <input type="tel" id="fone" className={styles.vetinput} /><br></br>
                        
                        <label for="Motivo" className={styles.vetlabelMotivo}>Motivo:</label>
                        <input type="text" id="Motivo" className={styles.vetinputMotivo} /><br></br>

                        <label for="Data da Consulta" className={styles.vetlabelData}>Data da Consulta:</label>
                        <input type="date" id="Data da Consulta" className={styles.vetinputData} /><br></br>

                        <label for="especialidade" className={styles.vetlabelEspecialidade}>Veterinarios:</label>
                        <select className={styles.vetSelect}>
                            
                            <option className={styles.Option}>Clinica</option>
                            <option className={styles.Option}>Radiologia</option>
                            <option className={styles.Option}>Grande Porte</option>
                            <option className={styles.Option}>Pequeno Porte</option>
                            
                        </select>
                    <img className={styles.vetImg} src="https://vetemdomicilio.com.br/wp-content/uploads/2021/05/cachorro-mulher.png"></img>
                </fieldset>
            </form>
        </div>
    );
}
export default Atendimento;